import {Navigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

const PublicRoute = ({children}) => {
  const {user} = useAuth();
  return !user ? children : <Navigate to="/" replace />;
};

export default PublicRoute;
