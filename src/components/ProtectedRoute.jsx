import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../App";

function ProtectedRoute({ children }) {
  const { user } = useContext(AppContext);

  if (!user?.email) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
export default ProtectedRoute;