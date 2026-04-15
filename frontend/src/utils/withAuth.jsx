import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate(); 

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/auth"); 
      }
    }, [navigate]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
