import { useContext, useEffect, useState, ChangeEvent } from "react";
import NewWalletPresenter from "./NewWalletPresenter";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AddWalletContext } from "../../contexts/AddWalletContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface INameAndCurrency {
  name: string;
  currency: string;
}

const NewWalletContainer = () => {
  const { theme } = useContext(ThemeContext);
  const { nameAndCurrencyWallet, setNameAndCurrencyWallet } = useContext(
    AddWalletContext
  ) as INameAndCurrency;

  const [currencies, setCurrencies] = useState([]);
  const [nameWallet, setNameWallet] = useState("");
  const [currencyForNewWallet, setSelectCurrencyForNewWallet] = useState("PLN");
  const navigate = useNavigate();

  const typeNameWalletHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const nameWallet = event.target.value;
    setNameWallet(nameWallet);
  };
  const typeCurrencyWalletHandler = (event: ChangeEvent<HTMLOptionElement>) => {
    const currencyWallet = event.target.value;
    setSelectCurrencyForNewWallet(currencyWallet);
  };
  const saveNameAndCurrency = () => {
    if (nameWallet && currencyForNewWallet) {
      const nameAndCurrency: INameAndCurrency = {
        name: nameWallet,
        currency: currencyForNewWallet,
      };
      setNameAndCurrencyWallet((prevWallets) => [
        ...prevWallets,
        nameAndCurrency,
      ]);
      navigate("/compositionstructure");
    }
  };
  const FetchCurrenciesFromNbp = async () => {
    const response = await axios.get(
      "https://api.nbp.pl/api/exchangerates/tables/A/"
    );
    const allCurrencies = response.data[0].rates.map((rate: string) => ({
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
    <NewWalletPresenter
      currencies={currencies}
      nameAndCurrencyWallet={nameAndCurrencyWallet}
      setNameAndCurrencyWallet={setNameAndCurrencyWallet}
      nameWallet={nameWallet}
      currencyForNewWallet={currencyForNewWallet}
      typeNameWalletHandler={typeNameWalletHandler}
      typeCurrencyWalletHandler={typeCurrencyWalletHandler}
      saveNameAndCurrency={saveNameAndCurrency}
      theme={theme}
    />
  );
};

export default NewWalletContainer;
