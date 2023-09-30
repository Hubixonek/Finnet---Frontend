import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

interface IProtectRouteProps {
  children: any;
  accessBy: any;
}

type TUser = {
  user: object;
};

const ProtectedRoute = ({ children, accessBy }: IProtectRouteProps) => {
  const { user } = useContext(AuthContext) as TUser;
  if (accessBy === "non-authenticated") {
    if (!user) {
      return children;
    }
  } else if (accessBy === "authenticated") {
    if (user) {
      return children;
    }
  }
  return <Navigate to={"/"}></Navigate>;
};
export default ProtectedRoute;
