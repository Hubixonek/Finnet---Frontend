import Table from "react-bootstrap/Table";
import { RiAddBoxFill } from "react-icons/ri";
import styles from "../styles/SecondWalletTable.module.scss";
import { useContext, useState } from "react";
import { DepositContext } from "../../contexts/DepositContext";
const SecondWalletTable = () => {
  const [dropDown, setDropDown] = useState(false);

  const dropDownHandler = () => {
    setDropDown(!dropDown);
    console.log(dropDown);
  };
  const { sumDeposit } = useContext(DepositContext);

  return (
    <div className={styles["container"]}>
      <RiAddBoxFill
        className={styles["dropdownBtn"]}
        onClick={dropDownHandler}
      />
      <Table responsive="md">
        <thead>
          <tr>
            <th>Konta gotówkowe </th>
            <th>Suma: {sumDeposit}</th>
            <th>Zysk</th>
            <th>Zysk dzienny</th>
            <th>zwrot</th>
            <th>zmiana dzienna</th>
          </tr>
        </thead>
        {dropDown && (
          <tbody>
            <tr>
              <td>Gotówka (konto)</td>
              <td>0.00</td>
              <td></td>
              <td>{sumDeposit}</td>
              <td>250 </td>
              <td>Milion</td>
            </tr>
          </tbody>
        )}
      </Table>
    </div>
  );
};

export default SecondWalletTable;
