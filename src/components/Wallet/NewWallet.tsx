import { useContext, useEffect, useState, createContext } from "react";
import styles from "../styles/NewWallet.module.scss";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AddWalletContext } from "../../contexts/AddWalletContext";
import { useNavigate } from "react-router-dom";
const NewWallet = () => {
  const [currencies, setCurrencies] = useState([]);
  const [nameWallet, setNameWallet] = useState("");
  const [currencyForNewWallet, setSelectCurrencyForNewWallet] = useState("PLN");
  const navigate = useNavigate();
  const { nameAndCurrencyWallet, setNameAndCurrencyWallet } =
    useContext(AddWalletContext);

  const typeNameWalletHandler = (event) => {
    const nameWallet = event.target.value;
    setNameWallet(nameWallet);
  };
  const typeCurrencyWalletHandler = (event) => {
    const currencyWallet = event.target.value;
    setSelectCurrencyForNewWallet(currencyWallet);
  };
  const saveNameAndCurrency = () => {
    if (nameWallet && currencyForNewWallet) {
      const data = {
        name: nameWallet,
        currency: currencyForNewWallet,
      };
      setNameAndCurrencyWallet((prevWallets) => [...prevWallets, data]);
      navigate("/compositionstructure");
    }
  };
  const { theme } = useContext(ThemeContext);
  const FetchCurrenciesFromNbp = async () => {
    const response = await axios.get(
      "http://api.nbp.pl/api/exchangerates/tables/A/"
    );
    const allCurrencies = response.data[0].rates.map((rate) => ({
      code: rate.code,
      name: rate.currency,
      rate: rate.mid,
    }));
    setCurrencies(allCurrencies);
  };
  useEffect(() => {
    FetchCurrenciesFromNbp();
  }, []);
  return (
    <div
      className={`${styles["container"]} ${
        theme ? styles["dark"] : styles["light"]
      }`}>
      <h3>Dodaj portfel</h3>
      <form>
        <div className={styles["text"]}>
          <p className={styles["pInput"]}>Podaj nazwę dla Twojego portfela</p>
          <input
            className={`form-control ${styles["input"]}`}
            type="text"
            onChange={typeNameWalletHandler}
          />
        </div>
        <div>
          <p className={styles["pSelect"]}>Wybierz podstawową walutę: </p>
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

export default NewWallet;
