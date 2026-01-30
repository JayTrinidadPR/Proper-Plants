export default function PlantCard({ plant, quantityInCart, onAdd }) {
  return (
    <div className="card">
      <div className="emoji">{plant.image}</div>
      <div className="name">{plant.name}</div>

      <button className="btn primary" onClick={() => onAdd(plant)}>
        {quantityInCart > 0 ? `Add again (+1) • ${quantityInCart}` : "Add to cart"}
      </button>
    </div>
  );
}

