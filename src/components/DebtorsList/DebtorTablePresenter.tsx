import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "../styles/DebtorTablePresenter.module.scss";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Rafał", "20.10.2023", "30.10.2023", 24, 4.0),
  createData("Hubert", "20.10.2023", "30.10.2023", 37, 4.3),
  createData("Maciek", "20.10.2023", "30.10.2023", 24, 6.0),
  createData("Szymon", "20.10.2023", "30.10.2023", 67, 4.3),
  createData("Mateusz", "20.10.2023", "30.10.2023", 49, 3.9),
];
const DebtorTablePresenter = () => {
  return (
    <TableContainer component={Paper} className={styles["container"]}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Imię dłużnika</TableCell>
            <TableCell>Data pożyczki</TableCell>
            <TableCell>Termin spłaty</TableCell>
            <TableCell>Kwota pożyczki</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs} PLN</TableCell>
              <TableCell>
                <IoMdCheckmark className={styles["btnAdd"]}></IoMdCheckmark>
              </TableCell>
              <TableCell>
                <IoMdClose className={styles["btnDelete"]}></IoMdClose>
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
