import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/products"
          element={<ProductListingPage addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <ShoppingCartPage
              cart={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
