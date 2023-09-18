import styles from "../styles/FundsForm.module.scss";
import DateField from "../forms/TextField/DateField";
import AmountField from "../forms/TextField/AmountField";
import SelectFromCurrency from "../forms/Select/SelectFromCurrency";
import SelectToCurrency from "../forms/Select/SelectToCurrency";
import RateField from "../forms/TextField/RateField";
import ResultField from "../forms/TextField/ResultField";
import RateOfApiField from "../forms/TextField/RateOfApiField";
import FormikErrorValidation from "../forms/Errors/FormikErrorValidation";
import Button from "../forms/Button/Button";
import TableWithFundsDatasContainer from "../Table/TableWithFundsDatasContainer";
const FundsFormPresenter = ({
  fromCurrency,
  toCurrency,
  funds,
  currencies,
  rate,
  theme,
  handleRemoveFundsData,
  fromCurrencyChangeHandler,
  toCurrencyChangeHandler,
  formik,
  postData,
}) => {
  return (
    <>
      <form
        className={`${styles["formHeader"]} ${
          theme ? styles["dark"] : styles["light"]
        }`}
        onSubmit={formik.handleSubmit}>
        <div className={styles["form_input--container"]}>
          <h1 className={styles["h1-style"]}>Przelicz kursy</h1>
          <DateField
            formik={formik}
            toCurrency={toCurrency}
            fromCurrency={fromCurrency}
          />
          <AmountField formik={formik} />
          <SelectFromCurrency
            formik={formik}
            fromCurrency={fromCurrency}
            currencies={currencies}
            fromCurrencyChangeHandler={fromCurrencyChangeHandler}
          />
          <RateField
            formik={formik}
            toCurrency={toCurrency}
            fromCurrency={fromCurrency}
          />
          <SelectToCurrency
            formik={formik}
            currencies={currencies}
            toCurrency={toCurrency}
            toCurrencyChangeHandler={toCurrencyChangeHandler}
          />
          <ResultField formik={formik} />
          <RateOfApiField toCurrency={toCurrency} rate={rate} />
          <Button postData={postData} />
          <FormikErrorValidation formik={formik} />
        </div>
      </form>
      <TableWithFundsDatasContainer
        currencies={currencies}
        funds={funds}
        removeFundsData={handleRemoveFundsData}
      />
    </>
  );
};

export default FundsFormPresenter;
