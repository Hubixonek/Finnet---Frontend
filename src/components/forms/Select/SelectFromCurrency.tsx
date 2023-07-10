import styles from "../../styles/FundsForm.module.scss";

type selectFromCurrencyProps = {
  formik: object;
  fromCurrency: string;
  currencies: Array<string>;
  fromCurrencyChangeHandler: Function;
};

const SelectFromCurrency = ({
  formik,
  fromCurrency,
  currencies,
  fromCurrencyChangeHandler,
} : selectFromCurrencyProps) => {
  return (
    <div className={`input-group ${styles.inputStyle}`}>
      <label htmlFor="fromCurrency"></label>
      <select
        className={`form-control ${
          formik.touched.fromCurrency && formik.errors.fromCurrency
            ? styles.errorInput
            : ""
        }`}
        value={fromCurrency}
        onChange={fromCurrencyChangeHandler}
        onBlur={formik.handleBlur}
        name="fromCurrency">
        <option value="" disabled>
          Wybierz walutę
        </option>
        <option value="PLN">PLN - polski złoty</option>
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.code} - {currency.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFromCurrency;
