import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <main className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p className="landing-description">
          Since 1995, Paradise Nursery has been bringing nature's beauty into homes and offices. 
          We specialize in rare and exotic houseplants, offering expert care advice and premium 
          quality plants. Our mission is to help you create your own green paradise.
        </p>
        <Link to="/products" className="cta-button">
          Explore Our Plants
        </Link>
      </div>
    </main>
  );
}
