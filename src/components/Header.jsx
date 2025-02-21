import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css';

export default function Header({ cartCount }) {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo-link">
          <h1>Paradise Nursery</h1>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Shop</Link>
          <Link to="/cart" className="cart-link">
            <FaShoppingCart className="cart-icon" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </nav>
    </header>
  );
}
