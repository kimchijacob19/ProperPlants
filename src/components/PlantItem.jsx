export default function PlantItem({ plant, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        textAlign: "center",
        background: "#f9f9f9",
      }}
    >
      <div style={{ fontSize: "2rem" }}>{plant.image}</div>
      <div>{plant.name}</div>
      <button
        onClick={() => addToCart(plant)}
        style={{
          marginTop: "0.5rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
