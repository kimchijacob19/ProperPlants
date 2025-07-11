export default function CartItem({ item, onIncrement, onDecrement }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #ddd",
        borderRadius: "4px",
        padding: "0.5rem",
        marginBottom: "0.5rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <span style={{ fontSize: "2rem" }}>{item.image}</span>
        <span>{item.name}</span>
      </div>
      <div>
        <button
          onClick={() => onDecrement(item.id)}
          style={{ marginRight: "0.5rem" }}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => onIncrement(item.id)}
          style={{ marginLeft: "0.5rem" }}
        >
          +
        </button>
      </div>
    </div>
  );
}
