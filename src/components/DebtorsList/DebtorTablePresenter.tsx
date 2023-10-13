import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "../styles/DebtorTablePresenter.module.scss";
import { IoMdCheckmark } from "react-icons/io";

const DebtorTablePresenter = ({ row, removeRow }) => {
  console.log(row);
  return (
    <TableContainer component={Paper} className={styles["container"]}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Imię dłużnika</TableCell>
            <TableCell>Data pożyczki</TableCell>
            <TableCell>Termin spłaty</TableCell>
            <TableCell>Kwota pożyczki</TableCell>
            <TableCell>Cel pożyczki</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((rows) => (
            <TableRow key={rows.id}>
              <TableCell component="td" scope="row">
                {rows.name}
              </TableCell>
              <TableCell>{rows.dateOfDebtor}</TableCell>
              <TableCell>{rows.repayment}</TableCell>
              <TableCell>{rows.amount} PLN</TableCell>
              <TableCell>{rows.typeLoan}</TableCell>

              <TableCell>
                <IoMdCheckmark
                  className={styles["btnAdd"]}
                  onClick={() => removeRow(rows.id)}></IoMdCheckmark>
              </TableCell>
              <TableCell>
                <span className={styles["btnEdit"]}>Edytuj</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DebtorTablePresenter;
