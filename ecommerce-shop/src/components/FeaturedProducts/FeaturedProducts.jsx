import React from 'react';
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} Products</h1>
        <p aria-hidden="true">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima ipsum ad doloremque..</p>
      </div>
      <div className="bottom" role="list">
        {error ? (
          <p role="alert">Something went wrong. Please try reloading.</p>
        ) : loading ? (
          <p aria-busy="true">Loading...</p>
        ) : (
          data?.map(item => (
            <Card item={item} key={item.id} />
          ))
        )}
      </div>
    </div>
  );
}

export default FeaturedProducts;
