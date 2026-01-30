import CartItem from "./CartItem";

export default function Cart({ cart, onInc, onDec }) {
  if (cart.length === 0) {
    return <p className="empty">Your cart is empty. Add a plant 🌱</p>;
  }

  return (
    <div className="cart">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} onInc={onInc} onDec={onDec} />
      ))}
    </div>
  );
}
