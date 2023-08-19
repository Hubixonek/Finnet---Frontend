import { useState, createContext, useEffect, FormEvent } from "react";
import { toast } from "react-toastify";
import { LocalStorage } from "../services/LocalStorage.service";
const DepositContext = createContext();

interface INewDepositDatas {
  operation: string;
  date: string;
  time: string;
  brutto: number;
  note: string;
  sumDeposit?: number;
}

const DepositContextProvider = ({ children }) => {
  const [operation, setOperation] = useState<string>("Wpłata");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [brutto, setBrutto] = useState<number>(0);
  const [depositDatas, setDepositDatas] = useState<any[]>([]);
  const [sumDeposit, setSumDeposit] = useState<number>(
    LocalStorage.get("sumDeposit")
  );
  const positionBottomRight = toast.POSITION.BOTTOM_RIGHT;

  const handleSubmit = (event: FormEvent) => {
    if (!brutto || brutto === 0) {
      return toast.error("Kwota musi być większa niż 0 !", {
        position: positionBottomRight,
      });
    }

    const newDepositDatas: INewDepositDatas = {
      operation: operation,
      date: date,
      time: time,
      brutto: brutto,
      note: note,
      sumDeposit: sumDeposit,
    };

    setDepositDatas((prevDepositDatas) => [
      ...prevDepositDatas,
      newDepositDatas,
    ]);
    console.log(newDepositDatas);
    sumOfDeposit();
  };
  const showToastMessage = () => {
    const bruttoLargerThanZero = brutto > 0;

    if (operation === "Wpłata" && bruttoLargerThanZero) {
      toast.success(`Udało się wpłacić gotówkę o kwocie  ${brutto} PLN !`, {
        position: positionBottomRight,
      });
    } else if (operation === "Wypłata" && bruttoLargerThanZero) {
      toast.success(`Udało się wypłacić gotówke o kwocie ${brutto} PLN !`, {
        position: positionBottomRight,
      });
    }
  };

  const sumOfDeposit = () => {
    if (operation === "Wpłata") {
      setSumDeposit(sumDeposit + parseFloat(brutto));
    } else if (operation === "Wypłata") {
      setSumDeposit(sumDeposit - parseFloat(brutto));
    }
  };
  useEffect(() => {
    LocalStorage.set("sumDeposit", sumDeposit);
  }, [sumDeposit]);

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
        handleSubmit,
        showToastMessage,
        sumDeposit,
        setSumDeposit,
      }}>
      {children}
    </DepositContext.Provider>
  );
};

export { DepositContext, DepositContextProvider };
