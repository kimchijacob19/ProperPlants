import CartItem from "./CartItem.jsx";

export default function Cart({ cartItems, onIncrement, onDecrement }) {
  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
}
