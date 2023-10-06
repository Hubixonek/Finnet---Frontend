import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.scss";
import { MouseEventHandler, useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
type TLoginLinkProps = {
  handleClick: MouseEventHandler;
};
type TAuthContext = {
  user: {};
};
const RegisterLink = ({ handleClick }: TLoginLinkProps) => {
  const { user } = useContext(AuthContext) as TAuthContext;
  return (
    <>
      <div>
        {!user && (
          <Link
            to="/registerform"
            className={styles["registerBtnSideBar"]}
            onClick={handleClick}>
            Korzystaj z Finnet za darmo
          </Link>
        )}
      </div>
    </>
  );
};
export default RegisterLink;
