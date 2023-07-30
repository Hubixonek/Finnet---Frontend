import { useState, createContext, useEffect, FormEvent } from "react";
import { toast } from "react-toastify";
const DepositContext = createContext({
  operation: "Wpłata",
  date: "",
  time: "",
  note: "",
  brutto: 0,
  depositDatas: [],
  sumDeposit: 0,
});

const DepositContextProvider = ({ children }) => {
  const [operation, setOperation] = useState<string>("Wpłata");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [brutto, setBrutto] = useState<number>(0);
  const [depositDatas, setDepositDatas] = useState<Array>([]);
  const [sumDeposit, setSumDeposit] = useState<number>(0);

  const handleSubmit = (event: FormEvent) => {
    const newDepositDatas = {
      operation: operation,
      date: date,
      time: time,
      brutto: brutto,
      note: note,
    };
    if (!brutto || brutto === 0) {
      return toast.error("Kwota musi być większa niż 0 !", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      setDepositDatas((prevDepositDatas) => [
        ...prevDepositDatas,
        newDepositDatas,
      ]);
    }
  };
  const showToastMessage = () => {
    if (brutto > 0) {
      toast.success(`Udało się wpłacić gotówkę o kwocie  ${brutto} PLN !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  const bruttoArr = depositDatas.map((deposit) => deposit.brutto);

  const sumOfDeposit = () => {
    const sum = bruttoArr.reduce((acc, val) => acc + parseFloat(val), 0);
    setSumDeposit(sum);
  };

  useEffect(() => {
    sumOfDeposit();
  }, [bruttoArr]);

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
        sumDeposit,
        setSumDeposit,
        handleSubmit,
        showToastMessage,
      }}>
      {children}
    </DepositContext.Provider>
  );
};

export { DepositContext, DepositContextProvider };
