import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useContext(AppContext);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleRemove = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <button onClick={() => navigate("/")}>Go Home</button></p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "20px" }}>
              <img src={`${API_URL}/${item.imageUrl}`} width="80" alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
                <button onClick={() => handleRemove(index)} style={{ backgroundColor: "red", color: "white" }}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Cart