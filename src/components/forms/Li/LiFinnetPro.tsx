import { BsFillLightningFill } from "react-icons/bs";
import styles from "../../styles/Navbar.module.scss";
const LiFinnetPro = () => {
  return (
    <li>
      <a>
        <BsFillLightningFill className={styles["icons"]} />
        <span>Finnet PRO</span>
      </a>
    </li>
  );
};
export default LiFinnetPro;
