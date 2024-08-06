// api/order/routes/order.js
'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/orders',
      handler: 'order.create',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/checkout-session',
      handler: 'order.findSession',
      config: {
        auth: false,
      },
    },
  ],
};
