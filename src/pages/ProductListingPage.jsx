import { plants } from '../data/plants';
import PlantCard from '../components/PlantCard';

export default function ProductListingPage({ addToCart }) {
  return (
    <main className="product-listing">
      <h2>Our Plants</h2>
      <p>Browse our collection of beautiful houseplants</p>
      <div className="plant-grid">
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            addToCart={addToCart}
          />
        ))}
      </div>
    </main>
  );
}
