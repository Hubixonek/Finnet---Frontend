import styles from "../../styles/Switches.module.scss";

const SwitchNBP = () => {
  return (
    <>
      <div className={`form-check form-switch ${styles.FormCheck}`}>
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefaultNBP"
          defaultChecked
        />
        <label
          className="form-check-label"
          htmlFor="flexSwitchCheckDefaultNBP">
          Korzystaj z kursów NBP{" "}
        </label>
      </div>
    </>
  );
};
export default SwitchNBP;
