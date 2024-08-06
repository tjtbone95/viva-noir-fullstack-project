import React from 'react';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts.jsx';
import Categories from '../../components/Categories/Categories.jsx';
import Slider from "../../components/Slider/Swiper";
import "./Home.scss";

export const Home = () => {
  return (
    <div className='home'>
      <Slider aria-label="Main slider showcasing featured content" />
      <FeaturedProducts type="featured" aria-label="Featured products section" />
      <Categories aria-label="Product categories" />
    </div>
  );
};

export default Home;
