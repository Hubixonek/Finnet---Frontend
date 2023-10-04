import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.scss";
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
type TLoginLinkProps = {
  showNav: boolean;
  setShowNav: (value: boolean) => void;
};
type TAuthContext = {
  user: {};
};
const RegisterLink = ({ setShowNav, showNav }: TLoginLinkProps) => {
  const { user } = useContext(AuthContext) as TAuthContext;
  return (
    <>
      <div>
        {!user && (
          <Link
            to="/registerform"
            className={styles["registerBtnSideBar"]}
            onClick={() => setShowNav(!showNav)}>
            Korzystaj z Finnet za darmo
          </Link>
        )}
      </div>
    </>
  );
};
export default RegisterLink;
