import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="categories">
      <div className="category">
        <Link className="link" to="/" aria-label="Category: Tops">
          <img
            src="img/Categories/Tops.webp"
            alt="Tops"
            className="image"
          />
          <div className="category-title">Tops</div>
        </Link>
      </div>
      <div className="category">
        <Link className="link" to="/" aria-label="Category: Jeans">
          <img
            src="img/Categories/Bottoms.jpeg"
            alt="Jeans"
            className="image"
          />
          <div className="category-title">Jeans</div>
        </Link>
      </div>
      <div className="category">
        <Link className="link" to="/" aria-label="Category: Shorts">
          <img
            src="img/Categories/Shorts.webp"
            alt="Shorts"
            className="image"
          />
          <div className="category-title">Shorts</div>
        </Link>
      </div>
      <div className="category">
        <Link className="link" to="/" aria-label="Category: Shades">
          <img
            src="img/Categories/Shades.webp"
            alt="Shades"
            className="image"
          />
          <div className="category-title">Shades</div>
        </Link>
      </div>
      <div className="category">
        <Link className="link" to="/" aria-label="Category: Dress">
          <img
            src="img/Categories/Dress.webp"
            alt="Dress"
            className="image"
          />
          <div className="category-title">Dress</div>
        </Link>
      </div>
      <div className="category">
        <Link className="link" to="/" aria-label="Category: Suits">
          <img
            src="img/Categories/Suits.jpeg"
            alt="Suits"
            className="image"
          />
          <div className="category-title">Suits</div>
        </Link>
      </div>
      <div className="category">
        <Link className="link" to="/" aria-label="Category: Bags">
          <img
            src="img/Categories/Bags.avif"
            alt="Bags"
            className="image"
          />
          <div className="category-title">Bags</div>
        </Link>
      </div>
      <div className="category">
        <Link className="link" to="/" aria-label="Category: Shoes">
          <img
            src="img/Categories/Shoes.jpeg"
            alt="Shoes"
            className="image"
          />
          <div className="category-title">Shoes</div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
