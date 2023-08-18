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
  payout?: number;
}

const DepositContextProvider = ({ children }) => {
  const [operation, setOperation] = useState<string>("Wpłata");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [brutto, setBrutto] = useState<number>(0);
  const [depositDatas, setDepositDatas] = useState<any[]>([]);
  const [sumDeposit, setSumDeposit] = useState<number>();
  const [payout, setPayOut] = useState<number>();

  const handleSubmit = (event: FormEvent) => {
    const newDepositDatas: INewDepositDatas = {
      operation: operation,
      date: date,
      time: time,
      brutto: brutto,
      note: note,
      sumDeposit: sumDeposit,
      payout: payout,
    };
    if (!brutto || brutto === 0) {
      return toast.error("Kwota musi być większa niż 0 !", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }

    setDepositDatas((prevDepositDatas) => [
      ...prevDepositDatas,
      newDepositDatas,
    ]);
    console.log(newDepositDatas);
  };
  const showToastMessage = () => {
    if (brutto > 0) {
      toast.success(`Udało się wpłacić gotówkę o kwocie  ${brutto} PLN !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const bruttoArr = depositDatas.map((deposit) => deposit.brutto);
  const sum = bruttoArr.reduce((acc, val) => acc + parseFloat(val), 0);

  const sumOfDeposit = () => {
    if (operation === "Wpłata") {
      setSumDeposit(sum);
    }
  };
  const payOut = () => {
    if (operation === "Wypłata") {
      setPayOut(sum - brutto);
    }
  };

  useEffect(() => {
    sumOfDeposit();
    payOut();
  }, [bruttoArr]);

  useEffect(() => {
    const data = LocalStorage.get("sumDeposit");
    if (data && data.length > 0) {
      setDepositDatas(data);
    }
  }, []);
  useEffect(() => {
    if (depositDatas && depositDatas.length > 0) {
      LocalStorage.set("sumDeposit", depositDatas);
    }
  }, [depositDatas]);

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
      }}>
      {children}
    </DepositContext.Provider>
  );
};

export { DepositContext, DepositContextProvider };
