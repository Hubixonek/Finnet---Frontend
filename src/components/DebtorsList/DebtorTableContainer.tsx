import { useState } from "react";
import DebtorTablePresenter from "./DebtorTablePresenter";
const DebtorTableContainer = ({ row, removeRow, reasonForLoan, setRow }) => {
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
    <DebtorTablePresenter
      removeRow={removeRow}
      handleEdit={handleEdit}
      handleEditDebtor={handleEditDebtor}
      updatedData={updatedData}
      setUpdatedData={setUpdatedData}
      row={row}
      reasonForLoan={reasonForLoan}
      editId={editId}
    />
  );
};

export default DebtorTableContainer;
