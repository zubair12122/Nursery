import './PlantCard.css';

export default function PlantCard({ plant, addToCart }) {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <div className="plant-info">
        <h3>{plant.name}</h3>
        <p className="plant-description">{plant.description}</p>
        <p className="plant-price">${plant.price.toFixed(2)}</p>
        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(plant)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
