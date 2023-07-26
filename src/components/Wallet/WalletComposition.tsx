import { AddWalletContext } from "../../contexts/AddWalletContext";
import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "../styles/WalletComposition.module.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import Form from "react-bootstrap/Form";
import { LocalStorage } from "../../services/LocalStorage.service";
import { Link } from "react-router-dom";
import WalletTable from "./WalletTable";
import SecondWalletTable from "./SecondWalletTable";

const WalletComposition = () => {
  const { nameAndCurrencyWallet, setNameAndCurrencyWallet } =
    useContext(AddWalletContext);
  const { theme } = useContext(ThemeContext);
  const [nameWallet, setNameWallet] = useState();

  useEffect(() => {
    const data = LocalStorage.get("wallet");
    if (data && data.length > 0) {
      setNameAndCurrencyWallet(data);
    }
  }, []);
  console.log(nameWallet);
  useEffect(() => {
    LocalStorage.set("wallet", nameAndCurrencyWallet);
  }, [nameAndCurrencyWallet]);
  if (nameAndCurrencyWallet == null) {
    return;
  }
  return (
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
        <Link to={"/newwallet"}>
          <Button variant="primary">Nowy portfel</Button>{" "}
        </Link>
        <Button variant="primary">Dodaj wpłatę</Button>{" "}
        <Button variant="primary">Kup</Button>{" "}
        <Button variant="primary">Sprzedaj</Button>{" "}
        <Button variant="primary">Historia operacji</Button>{" "}
        <Button variant="primary">Wykresy</Button>{" "}
      </div>
      <h2>Inwestycje</h2>
      <span>Data założenia portfela</span>
      <div className={styles["tableContainer"]}>
        <WalletTable />
        <span>
          Konta gotówkowe, suma, zysk, zysk dzienny, zwrot, zmianna dzienna,
          udział
        </span>
        <SecondWalletTable />
      </div>
    </div>
  );
};

export default WalletComposition;
