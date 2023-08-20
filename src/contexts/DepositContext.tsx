import { useState, createContext, useEffect, FormEvent } from "react";
import { toast } from "react-toastify";
import { LocalStorage } from "../services/LocalStorage.service";
import Decimal from "decimal.js";

const DepositContext = createContext();

//Definition of unusual type of "Money" based on number with unique symbol
type Money = number & { readonly type: unique symbol };

//Interface of definition data of new deposit datas
interface INewDepositDatas {
  operation: string;
  date: string;
  time: string;
  brutto: Money;
  note: string;
  sumDeposit: Money;
}

const DepositContextProvider = ({ children }) => {
  const [operation, setOperation] = useState<string>("Wpłata");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [brutto, setBrutto] = useState<Money>(0);
  const [depositDatas, setDepositDatas] = useState<any[]>([]);
  const [sumDeposit, setSumDeposit] = useState<Money>(
    LocalStorage.get("sumDeposit") || 0
  );
  const positionBottomRight = toast.POSITION.BOTTOM_RIGHT;
  const decimalSumDeposit = new Decimal(sumDeposit);
  const decimalBrutto = new Decimal(parseFloat(brutto));

  const handleSubmit = (event: FormEvent) => {
    if (!brutto || brutto === 0) {
      return toast.error("Kwota musi być większa niż 0 !", {
        position: positionBottomRight,
      });
    }

    const newDepositDatas: INewDepositDatas = {
      operation: operation,
      dateTime: new Date(`${date}T${time}`),
      brutto: brutto,
      note: note,
      sumDeposit: sumDeposit,
    };
    console.log(newDepositDatas);
    setDepositDatas((prevDepositDatas) => [
      ...prevDepositDatas,
      newDepositDatas,
    ]);
    console.log(newDepositDatas);
    sumOfDeposit();
  };
  const showToastMessage = () => {
    const bruttoLargerThanZero = brutto > 0;
    const greaterThanOrEqual = sumDeposit >= brutto;
    if (operation === "Wpłata" && bruttoLargerThanZero) {
      toast.success(`Udało się wpłacić gotówkę o kwocie  ${brutto} PLN`, {
        position: positionBottomRight,
      });
    } else if (
      operation === "Wypłata" &&
      bruttoLargerThanZero &&
      greaterThanOrEqual
    ) {
      toast.success(`Udało się wypłacić gotówke o kwocie ${brutto} PLN`, {
        position: positionBottomRight,
      });
    } else {
      toast.error(
        "Nie masz wystarczającej ilości gotówki by wypłacić z konta",
        {
          position: positionBottomRight,
        }
      );
    }
  };
  //Actualization sum of deposit/payout depanding on type of operation
  const sumOfDeposit = () => {
    if (operation === "Wpłata") {
      setSumDeposit(decimalSumDeposit.plus(decimalBrutto).toNumber() as Money);
    } else if (operation === "Wypłata") {
      //gte - greater than or equal
      if (decimalSumDeposit.gte(decimalBrutto)) {
        setSumDeposit(
          decimalSumDeposit.minus(decimalBrutto).toNumber() as Money
        );
      } else {
        console.log("Nie masz wystarczającej ilości gotówki by wypłacić");
      }
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
