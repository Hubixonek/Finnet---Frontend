import styles from "../../styles/SideBar.module.scss";

const Sidebar = ({ show }) => {
  return (
    <div className={show ? styles["sidebar active"] : styles["sidebar"]}>
      <ul>
        <li>
          <a href="#">Finnet</a>
        </li>
        <li>
          <a href="#">Finnet</a>
        </li>
        <li>
          <a href="#">Finnet</a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
