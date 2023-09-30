import Table from "react-bootstrap/Table";
import { useContext } from "react";
import { DepositContext } from "../../contexts/DepositContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "../styles/SecondWalletTable.module.scss";
import { TThemeContext } from "../../types/themecontext";
const WalletTable = () => {
  const { sumDeposit } = useContext(DepositContext);
  const { theme } = useContext(ThemeContext) as TThemeContext;

  return (
    <div
      className={`${styles["container"]} 
      }`}>
      <Table responsive="sm" className={theme ? "table-dark" : "table-light"}>
        <thead>
          <tr>
            <th>Walor</th>
            <th>Zmiana dzienna</th>
            <th>Śr.cena zakupu [PLN]</th>
            <th>Cena aktualna [PLN]</th>
            <th>Wartość waloru [PLN]</th>
            <th>Zysk [PLN]</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cały portfel</td>
            <td>0.00</td>
            <td></td>
            <td>100</td>
            <td>{sumDeposit}</td>
            <td>Milion</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default WalletTable;
