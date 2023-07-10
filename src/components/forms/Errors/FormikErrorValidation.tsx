import styles from "../../styles/FundsForm.module.scss";
import React from "react";

type formikErrorValidationProps = {
  formik: any;
};

const FormikErrorValidation = ({ formik }: formikErrorValidationProps) => {
  return (
    <>
      {formik.touched.amount && formik.errors.amount ? (
        <div className={styles["errorMessage"]}>{formik.errors.amount}</div>
      ) : null}
      {formik.touched.fromCurrency && formik.errors.fromCurrency ? (
        <div className={styles["errorMessage"]}>
          {formik.errors.fromCurrency}
        </div>
      ) : null}
      {formik.touched.rate && formik.errors.rate ? (
        <div className={styles["errorMessage"]}>{formik.errors.rate}</div>
      ) : null}
      {formik.touched.toCurrency && formik.errors.toCurrency ? (
        <div className={styles["errorMessage"]}>{formik.errors.toCurrency}</div>
      ) : null}
    </>
  );
};
export default FormikErrorValidation;
