import { useState, createContext } from "react";

const DepositContext = createContext();

const DepositContextProvider = ({ children }) => {
  const [operation, setOperation] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [note, setNote] = useState();
  const [brutto, setBrutto] = useState();
  const [depositDatas, setDepositDatas] = useState([]);

  return (
    <DepositContext.Provider
      value={{
        operation,
        setOperation,
        date,
        setDate,
        time,
        setTime,
        note,
        setNote,
        brutto,
        setBrutto,
        setDepositDatas,
        depositDatas,
      }}>
      {children}
    </DepositContext.Provider>
  );
};

export { DepositContext, DepositContextProvider };
