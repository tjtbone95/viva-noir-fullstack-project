import React, { useState } from 'react';
import "./Card.scss";
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const mainImageUrl = item.attributes?.img?.data?.attributes?.url;
  const secondImageUrl = item.attributes?.img2?.data?.attributes?.url;
  const title = item.attributes?.title;
  const price = item.attributes?.price;
  const oldPrice = item.attributes?.oldPrice || price + 20;

  return (
    <Link className='link' to={`/product/${item.id}`}>
      <div className='card'>
        <div
          className='image'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {item.attributes?.onSale && <span>On Sale</span>}
          <img
            src={mainImageUrl}
            alt={`Image of ${title}`}
            className={`mainImg ${isHovered ? 'hidden' : ''}`}
          />
          {secondImageUrl && (
            <img
              src={secondImageUrl}
              alt={`Second Image of ${title}`}
              className={`secondImg ${isHovered ? '' : 'hidden'}`}
            />
          )}
        </div>
        <h2>{title}</h2>
        <div className="prices">
          <h3>${price}</h3>
          {oldPrice !== price && <h3>${oldPrice}</h3>}
        </div>
      </div>
    </Link>
  );
}

export default Card;
