'use strict';

const stripe = require('stripe')(process.env.STRIPE_KEY);
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi.service('api::product.product').findOne(product.id);
          return {
            price_data: {
              currency: 'usd',
              product_data: { name: item.title },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.quantity,
          };
        })
      );

      // Get the current URL from the request headers (referer)
      const currentUrl = ctx.request.headers.referer;

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ['US', 'CA'] },
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: currentUrl, // Use the captured current URL as cancel_url
        line_items: lineItems,
      });

      await strapi.service('api::order.order').create({ data: { products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
    
  async findSession(ctx) {
    const { session_id } = ctx.query;

    try {
      const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'customer_details', 'payment_intent', 'shipping_details'],
      });

      const lineItems = await stripe.checkout.sessions.listLineItems(session_id, { limit: 100 });

      ctx.send({
        ...session,
        line_items: lineItems.data,
      });
    } catch (error) {
      ctx.response.status = 500;
      ctx.send({ error: error.message });
    }
  },
}));
