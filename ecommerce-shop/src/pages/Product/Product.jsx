import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './Product.scss';
import { FavoriteBorder, BalanceOutlined } from '@mui/icons-material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Box } from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

export const Product = () => {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState('img');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);

  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  useEffect(() => {
    if (data && data.attributes) {
      if (data.attributes.sizes && data.attributes.sizes.data) {
        const sortedSizes = data.attributes.sizes.data
          .map(size => size.attributes.size)
          .sort((a, b) => parseInt(a.id) - parseInt(b.id));
        setSizes(sortedSizes);

        if (sortedSizes.length === 1) {
          setSelectedSize(sortedSizes[0]);
        } else {
          const largerSizes = ['Medium', 'Large'];
          const defaultSize = sortedSizes.find(size => largerSizes.includes(size));
          setSelectedSize(defaultSize || sortedSizes[0]);
        }
      }

      if (data.attributes.colors && data.attributes.colors.data) {
        const colorsData = data.attributes.colors.data.map(color => ({
          hexcode: color.attributes.hexcode,
          img: color.attributes.img ? color.attributes.img.data.attributes.url : null,
          name: color.attributes.name,
        }));
        setColors(colorsData);

        if (colorsData.length > 0) {
          setSelectedColor(colorsData[0].name);
        }
      }
    }
  }, [data]);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setErrorMessage('');
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleAddToBag = () => {
    if (!selectedSize) {
      setErrorMessage('You must select a size first.');
      return;
    }

    dispatch(
      addToCart({
        id: data.id,
        title: data.attributes.title,
        desc: data.attributes.desc,
        price: data.attributes.price,
        img: data.attributes.img.data.attributes.url,
        quantity,
        size: selectedSize,
        color: selectedColor,
      })
    );
  };

  return (
    <div className="product">
      {loading ? (
        'loading'
      ) : (
        <>
          <div className="left">
            <div className="images">
              {data?.attributes?.img?.data?.attributes?.url && (
                <img
                  src={`${data.attributes.img.data.attributes.url}`}
                  alt=""
                  onClick={() => setSelectedImg('img')}
                />
              )}
              {data?.attributes?.img2?.data?.attributes?.url && (
                <img
                  src={`${data.attributes.img2.data.attributes.url}`}
                  alt=""
                  onClick={() => setSelectedImg('img2')}
                />
              )}
              {data?.attributes?.img3?.data?.attributes?.url && (
                <img
                  src={`${data.attributes.img3.data.attributes.url}`}
                  alt=""
                  onClick={() => setSelectedImg('img3')}
                />
              )}
              {data?.attributes?.img4?.data?.attributes?.url && (
                <img
                  src={`${data.attributes.img4.data.attributes.url}`}
                  alt=""
                  onClick={() => setSelectedImg('img4')}
                />
              )}
            </div>
            <div className="mainImg">
              <img
                src={`${data?.attributes[selectedImg]?.data?.attributes?.url}`}
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <span className="product-detail">{data?.attributes?.type}</span>
            <h1>{data?.attributes?.title}</h1>
            <p>{data?.attributes?.desc}</p>
            <div className="prices">
              <span className="price">${data?.attributes?.price}</span>
              <span className='oldPrice'>${data?.attributes?.oldPrice}</span>
            </div>
            <div className="colors">
              <p>
                Color: <span>{selectedColor}</span>
              </p>
              <div className="color-swatches">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleColorSelect(color.name)}
                    style={{
                      backgroundImage: color.img ? `url(${import.meta.env.VITE_UPLOAD_URL}${color.img})` : 'none',
                      backgroundColor: color.hexcode || 'transparent',
                      border: selectedColor === color.name ? '1px solid #000' : '1px solid #ccc',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      marginRight: '10px',
                      cursor: 'pointer',
                      backgroundSize: 'cover',
                      position: 'relative',
                      boxShadow: selectedColor === color.name ? 'inset 0 0 0 3px rgba(255, 255, 255, 1)' : 'none',
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="size">
              <p>
                Size&nbsp;&nbsp;&nbsp;<span>{selectedSize || 'Select a size'}</span>
              </p>
              <div className="size-select">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={selectedSize === size ? 'selected' : ''}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <Link>
                <span className="size-guide">Size Guide</span>
              </Link>
            </div>
            <div className="quantity">
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button className="add" onClick={handleAddToBag}>
                <ShoppingBagOutlinedIcon /> ADD TO BAG
              </button>
              <div className="link">
                <div className="item">
                  <FavoriteBorder /> ADD TO WISH LIST
                </div>
                <div className="item">
                  <BalanceOutlined /> ADD TO COMPARE
                </div>
              </div>
            </div>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <Box>
                    <AccordionButton
                      sx={{
                        _hover: {
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      <Box as="span" flex="1" textAlign="left" fontSize='1rem'>
                        About This Product
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Box>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
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
                      }}
                    >
                      <Box as="span" flex="1" textAlign="left" fontSize='1rem'>
                        Product Details
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Box>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
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
                      }}
                    >
                      <Box as="span" flex="1" textAlign="left" fontSize='1rem'>
                        Shipping & Returns
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                </Box>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;

