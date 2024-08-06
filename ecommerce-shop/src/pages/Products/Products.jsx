import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import List from '../../components/Lists/List';
import './Products.scss';
import { Box } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

export const Products = ({ category, title }) => {
  const catId = parseInt(useParams().id);

  // Min and max values for dual range slider 
  const [minPrice, setMinPrice] = useState(30);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleMinPriceChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxPriceChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  // Fetch category and subcategory details
  const { data: categoryData, loading: categoryLoading, error: categoryError } = useFetch(
    `/categories/${catId}?populate=*`
  );
    
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="banner">
        <div className="page-index">
          {categoryLoading ? (
            <h2>Loading...</h2>
          ) : (
            <h2>{categoryData?.attributes?.title}</h2>
          )}
          <ul>
            <Link to={`/products/${catId}`} aria-label={`${categoryData?.attributes?.title} products`}>
              {categoryData?.attributes?.title}
            </Link>
            <p>/</p>
            <li>Apparel</li>
          </ul>
        </div>
        <img
          className="catImg"
          src={categoryData?.attributes?.img?.data?.attributes?.url}
          alt={`${categoryData?.attributes?.title} Category Image`}
        />
      </div>
      <div className="filter-section">
        <div className="left">
          <Accordion allowToggle className="accordion">
            <AccordionItem>
              <h2>
                <Box>
                  <AccordionButton
                    sx={{
                      _hover: {
                        backgroundColor: 'transparent',
                      },
                      marginTop: '-8px',
                      marginBottom: '-8px',
                    }}
                  >
                    <Box as="span" flex="1" textAlign="left" fontSize="1rem">
                      Category
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Box>
              </h2>
              <AccordionPanel pb={4}>
                {data?.map((item) => (
                  <div className="inputItem" key={item.id}>
                    <input
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                      onChange={handleChange}
                      aria-label={`Select ${item.attributes.title}`}
                    />
                    <label htmlFor={item.id}>{item.attributes.title}</label>
                  </div>
                ))}
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <Box>
                  <AccordionButton
                    sx={{
                      _hover: {
                        backgroundColor: 'transparent',
                      },
                      marginTop: '-8px',
                      marginBottom: '-8px',
                    }}
                  >
                    <Box as="span" flex="1" textAlign="left" fontSize="1rem">
                      Price
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Box>
              </h2>
              <AccordionPanel pb={4}>
                <div className="inputItem">
                  <div className="slider-wrapper">
                    <input
                      className="slider"
                      type="range"
                      min={0}
                      max={1000}
                      value={minPrice}
                      onChange={handleMinPriceChange}
                      style={{ zIndex: minPrice > maxPrice - 100 ? 5 : 'auto' }}
                      aria-label="Minimum Price Slider"
                    />
                    <input
                      className="slider"
                      type="range"
                      min={0}
                      max={1000}
                      value={maxPrice}
                      onChange={handleMaxPriceChange}
                      aria-label="Maximum Price Slider"
                    />
                    <div className="slider-values">
                      <span>${minPrice}</span>
                      <span>${maxPrice}</span>
                    </div>
                  </div>
                </div>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <Box>
                <h2>
                  <AccordionButton
                    sx={{
                      _hover: {
                        backgroundColor: 'transparent',
                      },
                      marginTop: '-8px',
                      marginBottom: '-8px',
                    }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize="1rem"
                      fontFamily="var(--header-font)"
                    >
                      Sort By
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
              </Box>
              <AccordionPanel pb={4}>
                <div className="inputItem">
                  <input
                    type="radio"
                    id="desc"
                    value="desc"
                    name="price"
                    onChange={(e) => setSort('asc')}
                    aria-label="Sort by Highest to Lowest Price"
                  />
                  <label htmlFor="desc">Highest to Lowest Price</label>
                </div>
                <div className="inputItem">
                  <input
                    type="radio"
                    id="asc"
                    value="asc"
                    name="price"
                    onChange={(e) => setSort('desc')}
                    aria-label="Sort by Lowest to Highest Price"
                  />
                  <label htmlFor="asc">Lowest to Highest Price</label>
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="right">
          <List
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            subCats={selectedSubCats}
            aria-label="Product List"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
