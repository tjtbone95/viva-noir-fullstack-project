import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Updated import
import { ChakraProvider } from '@chakra-ui/react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Newsletter from './components/Newsletter/Newsletter';
import Success from './pages/Success/Success';

const Layout = () => {
  return (
    <div className="app">
      <ChakraProvider>
        <Navbar />
        <div className="content">
          {/* Define Route components for each route */}
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:id" component={Products} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/success" component={Success} />
        </div>
        <Newsletter />
        <Footer />
      </ChakraProvider>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router> {/* Wrap your application with Router */}
      <Layout />
    </Router>
  );
}

export default App;
