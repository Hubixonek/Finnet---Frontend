import { useState, useContext, useEffect } from "react";
import DebtorListPresenter from "./DebtorListPresenter";
import { ThemeContext } from "../../contexts/ThemeContext";


const DebtorListContainer = () => {
  const [reasonForLoan, setReasonForLoan] = useState([
    { value: "Wybierz typ pożyczki", label: "Wybierz typ pożyczki" },
    { value: "Konsumpcja", label: "Konsumpcja" },
    { value: "Założenie inwestycji", label: "Założenie inwestycji" },
  ]);
 
  const { theme } = useContext(ThemeContext);

  

  const [debtorList, setDebtorList] = useState([
    {
      id: Math.random(),
      name: "",
      dateOfDebtor: "",
      repayment: "",
      amount: 0,
      typeLoan: "",
    },
  ]);
  const [row, setRow] = useState([]);
  const handleDebtor = (event) => {
    const { name, value } = event.target;
    setDebtorList((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRow([
      ...row,
      {
        id: Math.random(),
        name: debtorList.name,
        dateOfDebtor: debtorList.dateOfDebtor,
        repayment: debtorList.repayment,
        amount: debtorList.amount,
        typeLoan: debtorList.typeLoan,
      },
    ]);
  };
  const removeRow = (id) => {
    setRow(row.filter((row) => row.id !== id));
  };

  return (
      <DebtorListPresenter
          reasonForLoan={reasonForLoan}
          handleSubmit={handleSubmit}
          handleDebtor={handleDebtor}
          removeRow={removeRow}
          row={row}
          debtorList={debtorList}
          theme={theme}
          setRow={setRow}
          setDebtorList={setDebtorList}
       
      />
  );
};

export default DebtorListContainer;