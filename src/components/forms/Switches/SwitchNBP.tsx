import React from "react";
import { useState } from "react";
import styles from "../../styles/Switches.module.scss";

const SwitchNBP = () => {
  const [isNBPActive, setIsNBPActive] = useState(true);

  const toggleHandler = () => {
    setIsNBPActive(!isNBPActive);
  };

  return (
    <>
      <div className={`form-check form-switch ${styles.FormCheck}`}>
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefaultNBP"
          checked={isNBPActive}
          onChange={toggleHandler}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefaultNBP">
          Korzystaj z kursów NBP{" "}
        </label>
      </div>
      <div className={`form-check form-switch ${styles.FormCheck}`}>
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefaultGoogle"
          checked={!isNBPActive}
          onChange={toggleHandler}
        />
        <label
          className="form-check-label"
          htmlFor="flexSwitchCheckDefaultGoogle"
        >
          Korzystaj z kursów Google{" "}
        </label>
      </div>
    </>
  );
};

export default SwitchNBP;