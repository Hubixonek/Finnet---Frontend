import styles from "../styles/NewWallet.module.scss";
import Button from "react-bootstrap/Button";

const NewWalletPresenter = ({
  theme,
  typeNameWalletHandler,
  typeCurrencyWalletHandler,
  currencies,
  saveNameAndCurrency,
}) => {
  return (
    <div
      className={`${styles["container"]} ${
        theme ? styles["dark"] : styles["light"]
      }`}>
      <h3>Dodaj portfel</h3>
      <form>
        <div className={styles["text"]}>
          <label className={styles["pInput"]}>
            Podaj nazwę dla Twojego portfela
          </label>
          <input
            className={`form-control ${styles["input"]}`}
            type="text"
            onChange={typeNameWalletHandler}
          />
        </div>
        <div>
          <label className={styles["pSelect"]}>
            Wybierz podstawową walutę:{" "}
          </label>
          <select
            className={`form-control ${styles["select"]}`}
            onChange={typeCurrencyWalletHandler}>
            <option value="" disabled>
              Wybierz walutę
            </option>
            <option value="PLN">PLN - polski złoty</option>
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.code}>
                {currency.code} - {currency.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Button
            variant="primary"
            className={styles["btn"]}
            onClick={saveNameAndCurrency}>
            Dodaj portfel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewWalletPresenter;
