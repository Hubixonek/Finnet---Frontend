import Button from "react-bootstrap/Button";
import styles from "../styles/WalletComposition.module.scss";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import WalletTable from "./WalletTable";
import SecondWalletTable from "./SecondWalletTable";
import DisplayedDepositContainer from "../Deposit/DisplayedDepositContainer";
import PieChartPresenter from "./PieChartPresenter";
import AreaChartPresenter from "./AreaChartPresenter";
const WalletCompositionPresenter = ({
  nameAndCurrencyWallet,
  displayDepositHandler,
  displayDeposit,
  theme,
}) => {
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
        <label className={styles["textPieChart"]}>
          Udział typów walorów w portfelu
        </label>

        <PieChartPresenter />
        <label className={styles["textAreaChart"]}>
          Wartość rolling return w czasie [%] - dane tygodniowe
        </label>
        <AreaChartPresenter />
        <div
          className={`${styles["modalLayout"]} ${
            displayDeposit ? styles["modal"] : ""
          }`}>
          <DisplayedDepositContainer />
        </div>
      </div>
    </>
  );
};

export default WalletCompositionPresenter;
