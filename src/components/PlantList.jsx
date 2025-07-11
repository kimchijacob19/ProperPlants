import PlantItem from "./PlantItem.jsx";

export default function PlantList({ plants, addToCart }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >
      {plants.map((plant) => (
        <PlantItem key={plant.id} plant={plant} addToCart={addToCart} />
      ))}
    </div>
  );
}
