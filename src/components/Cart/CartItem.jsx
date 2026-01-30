export default function CartItem({ item, onInc, onDec }) {
  return (
    <div className="cart-item">
      <div className="cart-left">
        <span className="emoji small">{item.image}</span>
        <div>
          <div className="name">{item.name}</div>
          <div className="muted">Qty: {item.quantity}</div>
        </div>
      </div>

      <div className="cart-actions">
        <button className="btn" onClick={() => onDec(item.id)}>
          −
        </button>
        <button className="btn" onClick={() => onInc(item.id)}>
          +
        </button>
      </div>
    </div>
  );
}
