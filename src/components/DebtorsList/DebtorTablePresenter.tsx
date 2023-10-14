import Table from "react-bootstrap/Table";
import styles from "../styles/DebtorTablePresenter.module.scss";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { IoMdCheckmark } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const DebtorTablePresenter = ({ row, removeRow, reasonForLoan, setRow }) => {
  const { theme } = useContext(ThemeContext);
  const [editId, setEditId] = useState(-1);

  const [updatedData, setUpdatedData] = useState({});

  console.log(row);

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleEditDebtor = (id) => {
    const updatedRows = row.map((rows) => {
      if (rows.id === id) {
        return { ...rows, ...updatedData };
      }
      return rows;
    });
    setRow(updatedRows);
    setEditId(-1);
  };
  console.log(updatedData);

  return (
    <div className={styles["container"]}>
      <Table responsive="sm" className={theme ? "table-dark" : "table-light"}>
        <thead>
          <tr>
            <th>Imię dłużnika</th>
            <th>Data pożyczki</th>
            <th>Termin spłaty</th>
            <th>Kwota pożyczki</th>
            <th>Cel pożyczki</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {row.map((rows) =>
            rows.id === editId ? (
              <tr key={rows.id}>
                <td>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={(e) =>
                      setUpdatedData({ ...updatedData, name: e.target.value })
                    }
                    defaultValue={rows.name}
                  />
                </td>
                <td>
                  <Form.Control
                    type="date"
                    name="dateOfDebtor"
                    onChange={(e) =>
                      setUpdatedData({
                        ...updatedData,
                        dateOfDebtor: e.target.value,
                      })
                    }
                    defaultValue={rows.dateOfDebtor}
                  />
                </td>
                <td>
                  <Form.Control
                    type="date"
                    name="repayment"
                    onChange={(e) =>
                      setUpdatedData({
                        ...updatedData,
                        repayment: e.target.value,
                      })
                    }
                    defaultValue={rows.repayment}
                  />
                </td>
                <td>
                  <Form.Control
                    type="number"
                    name="amount"
                    onChange={(e) =>
                      setUpdatedData({ ...updatedData, amount: e.target.value })
                    }
                    defaultValue={rows.amount}
                  />
                </td>
                <td>
                  <Form.Select
                    name="typeLoan"
                    onChange={(e) =>
                      setUpdatedData({
                        ...updatedData,
                        typeLoan: e.target.value,
                      })
                    }>
                    {reasonForLoan.map((reason) => {
                      return (
                        <option key={reason.value} defaultValue={rows.typeLoan}>
                          {reason.label}
                        </option>
                      );
                    })}
                  </Form.Select>
                </td>
                <td></td>
                <td>
                  <Button onClick={() => handleEditDebtor(rows.id)}>
                    Zatwierdź
                  </Button>
                </td>
              </tr>
            ) : (
              <tr key={rows.id}>
                <td>{rows.name}</td>
                <td>{rows.dateOfDebtor}</td>
                <td>{rows.repayment}</td>
                <td>{rows.amount}</td>
                <td>{rows.typeLoan}</td>
                <td>
                  <IoMdCheckmark
                    className={styles["btnAdd"]}
                    onClick={() => removeRow(rows.id)}
                  />
                </td>
                <td
                  className={styles["btnEdit"]}
                  onClick={() => handleEdit(rows.id)}>
                  Edytuj
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default DebtorTablePresenter;
