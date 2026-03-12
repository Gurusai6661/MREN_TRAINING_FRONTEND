import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Content.css";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function Content() {
  const [products, setProducts] = useState([]);
  const { user, cart, setCart } = useContext(AppContext);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const url = `${API_URL}/store`;
    const res = await axios.get(url);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    if (!user?.email) {
      navigate("/login");
      return;
    }
    // simple implementation, doesn't handle quantity
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <div className="box" key={product._id}>
            <img src={`${API_URL}/${product.imageUrl}`} width="300px" alt="" />
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <h4>{product.price}</h4>
            <p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Content;