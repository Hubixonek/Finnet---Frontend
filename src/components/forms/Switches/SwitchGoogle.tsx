import React from "react";
import styles from "../../styles/Switches.module.scss";

const SwitchGoogle = () => {
  return (
    <>
      <div className={`form-check form-switch ${styles.FormCheck}`}>
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefaultGoogle"
        />
        <label
          className="form-check-label"
          htmlFor="flexSwitchCheckDefaultGoogle">
          Korzystaj z kursów Google
        </label>
      </div>
    </>
  );
};
export default SwitchGoogle;
