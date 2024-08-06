import React from 'react';
import "./Footer.scss"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcDiscover, faCcMastercard, faCcVisa, faPaypal, faStripe, faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Box } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

export const Footer = () => {
  return (
    <div className="footer" aria-label="Footer">
      <div className="wrapper">
        <div className="top">
          <Accordion allowToggle className="accordion">
            <AccordionItem sx={{ paddingInline: "32px" }}>
              <h1>
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
                    <Box flex="1">
                      Categories
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Box>
              </h1>
              <AccordionPanel pb={4} sx={{ paddingInline: "32px" }}>
                <Link to="/" className='link' aria-label="Women">Women</Link>
                <Link to="/" className='link' aria-label="Men">Men</Link>
                <Link to="/" className='link' aria-label="Children">Children</Link>
                <Link to="/" className='link' aria-label="Accessories">Accessories</Link>
                <Link to="/" className='link' aria-label="New Arrivals">New Arrivals</Link>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem sx={{ paddingInline: "32px" }}>
              <h1>
                <Box>
                  <AccordionButton
                    sx={{
                      _hover: {
                        backgroundColor: 'transparent',
                      },
                      marginTop: '-8px',
                      marginBottom: '-8px'
                    }}
                  >
                    <Box flex="1">
                      Links
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Box>
              </h1>
              <AccordionPanel pb={4}>
                <Link to="/" className='link' aria-label="FAQ">FAQ</Link>
                <Link to="/" className='link' aria-label="Pages">Pages</Link>
                <Link to="/" className='link' aria-label="Stores">Stores</Link>
                <Link to="/" className='link' aria-label="Compare">Compare</Link>
                <Link to="/" className='link' aria-label="Cookies">Cookies</Link>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem sx={{ paddingInline: "32px" }}>
              <h1>
                <Box>
                  <AccordionButton
                    sx={{
                      _hover: {
                        backgroundColor: 'transparent',
                      },
                      marginTop: '-8px',
                      marginBottom: '-8px'
                    }}
                  >
                    <Box flex="1">
                      About
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Box>
              </h1>
              <AccordionPanel pb={4}>
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus repudiandae iure,
                  quos eligendi necessitatibus rerum corrupti illo architecto tempora! In maxime reprehenderit totam eos iure!
                  Molestiae eum repudiandae ut natus.
                </span>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem sx={{ paddingInline: "32px" }}>
              <h1>
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
                    <Box flex="1">
                      Contact Us
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Box>
              </h1>
              <AccordionPanel pb={4}>
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus repudiandae iure,
                  quos eligendi necessitatibus rerum corrupti illo architecto tempora! In maxime reprehenderit totam eos iure!
                  Molestiae eum repudiandae ut natus.
                </span>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <div className="item">
            <h1>Categories</h1>
            <Link to="/" className='link' aria-label="Women">Women</Link>
            <Link to="/" className='link' aria-label="Men">Men</Link>
            <Link to="/" className='link' aria-label="Accessories">Accessories</Link>
            <Link to="/" className='link' aria-label="New Arrivals">New Arrivals</Link>
          </div>
          <div className="item">
            <h1>Links</h1>
            <Link to="/" className='link' aria-label="FAQ">FAQ</Link>
            <Link to="/" className='link' aria-label="Pages">Pages</Link>
            <Link to="/" className='link' aria-label="Stores">Stores</Link>
            <Link to="/" className='link' aria-label="Compare">Compare</Link>
            <Link to="/" className='link' aria-label="Cookies">Cookies</Link>
          </div>
          <div className="item">
            <h1>About</h1>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus repudiandae iure,
              quos eligendi necessitatibus rerum corrupti illo architecto tempora! In maxime reprehenderit totam eos iure!
              Molestiae eum repudiandae ut natus.
            </span>
          </div>
          <div className="item">
            <h1>Contact</h1>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus repudiandae iure,
              quos eligendi necessitatibus rerum corrupti illo architecto tempora! In maxime reprehenderit totam eos iure!
              Molestiae eum repudiandae ut natus.
            </span>
          </div>
          <div className="item">
            <div className="wrapper-right">
              <div className="social-media">
                <h1>Follow Us</h1>
                <div className="social-icons">
                  <FontAwesomeIcon className="icon" icon={faFacebook} aria-label="Facebook" />
                  <FontAwesomeIcon className="icon" icon={faInstagram} aria-label="Instagram" />
                  <FontAwesomeIcon className="icon" icon={faTwitter} aria-label="Twitter" />
                  <FontAwesomeIcon className="icon" icon={faYoutube} aria-label="Youtube" />
                </div>
              </div>
              <div className="payments">
                <h1>Payment Methods</h1>
                <div className="payment-icons">
                  <FontAwesomeIcon className="icon" icon={faStripe} aria-label="Stripe" />
                  <FontAwesomeIcon className="icon" icon={faCcVisa} aria-label="Visa" />
                  <FontAwesomeIcon className="icon" icon={faCcMastercard} aria-label="Mastercard" />
                  <FontAwesomeIcon className="icon" icon={faCcDiscover} aria-label="Discover" />
                  <FontAwesomeIcon className="icon" icon={faPaypal} aria-label="Paypal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <img src="../img/Viva Noir Logo.svg" alt="Viva Noir Logo" />
      </div>
    </div>

  )
}

export default Footer;
