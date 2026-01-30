import PlantCard from "./PlantCard";

export default function PlantsGrid({ plants, cart, onAdd }) {
  return (
    <section className="grid">
      {plants.map((plant) => {
        const inCart = cart.find((item) => item.id === plant.id);
        const qty = inCart ? inCart.quantity : 0;

        return (
          <PlantCard
            key={plant.id}
            plant={plant}
            quantityInCart={qty}
            onAdd={onAdd}
          />
        );
      })}
    </section>
  );
}
