import { AddWalletContext } from "../../contexts/AddWalletContext";
import { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import styles from "../styles/WalletComposition.module.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import Form from "react-bootstrap/Form";
import { LocalStorage } from "../../services/LocalStorage.service";
import { Link } from "react-router-dom";
import WalletTable from "./WalletTable";
import SecondWalletTable from "./SecondWalletTable";
import { DisplayContext } from "../../contexts/DisplayDepositContext";
import DisplayedDeposit from "../Deposit/DisplayedDeposit";

const WalletComposition = () => {
  const { nameAndCurrencyWallet, setNameAndCurrencyWallet } =
    useContext(AddWalletContext);
  const { theme } = useContext(ThemeContext);
  const { displayDepositHandler, displayDeposit } = useContext(DisplayContext);

  useEffect(() => {
    const data = LocalStorage.get("wallet");
    if (data && data.length > 0) {
      setNameAndCurrencyWallet(data);
    }
  }, []);

  useEffect(() => {
    LocalStorage.set("wallet", nameAndCurrencyWallet);
  }, [nameAndCurrencyWallet]);
  if (nameAndCurrencyWallet == null) {
    return;
  }

  return (
    <>
      <div
        className={`${styles["container"]} ${
          theme ? styles["dark"] : styles["light"]
        }`}>
        <Form.Select className={styles["wallets"]}>
          {nameAndCurrencyWallet.map((wallet) => (
            <option key={wallet.name}>{wallet.name}</option>
          ))}
        </Form.Select>

        <h1>Portfel - skład i struktura</h1>

        <div className={styles["btnGroup"]}>
          <Link to="/newwallet">
            <Button>Dodaj nowy portfel</Button>
          </Link>
          <Button onClick={displayDepositHandler}>Dodaj wpłatę</Button>
          <Button>Kup</Button> <Button>Sprzedaj</Button>
          <Button>Historia operacji</Button> <Button>Wykresy</Button>
        </div>
        <h2>Inwestycje</h2>
        <span>Data założenia portfela </span>
        <div className={styles["tableContainer"]}>
          <WalletTable />

          <SecondWalletTable />
        </div>
        <div
          className={`${styles["modalLayout"]} ${
            displayDeposit ? styles["modal"] : ""
          }`}>
          <DisplayedDeposit />
        </div>
      </div>
    </>
  );
};

export default WalletComposition;
