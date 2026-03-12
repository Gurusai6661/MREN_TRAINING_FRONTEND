import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const { setUser } = useContext(AppContext);
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    const url = API_URL + "/auth/signin";
    try {
      const response = await axios.post(url, credentials);
      setUser(response.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during login.");
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Login Page</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
      </p>
      <p>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
      </p>
      <p>
        <button onClick={handleLogin}>Login</button>
      </p>
      <p>
        <Link to="/register">New user register here</Link>
      </p>
    </div>
  );
}
export default Login;