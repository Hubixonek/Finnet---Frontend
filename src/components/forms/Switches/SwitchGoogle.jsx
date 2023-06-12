import styles from "../../styles/Switches.module.scss";

const SwitchGoogle = () => {
  return (
    <>
      <div className={`form-check form-switch ${styles.FormCheck}`}>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Korzystaj z kursów Google
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"></input>
      </div>
    </>
  );
};
export default SwitchGoogle;
