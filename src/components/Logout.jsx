import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

function Logout(){
    const { setUser } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        setUser({});
        navigate("/login");
    }, [setUser, navigate]);

    return null; // or a loading spinner
}
export default Logout