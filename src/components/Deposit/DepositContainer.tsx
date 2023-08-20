import DepositPresenter from "./DepositPresenter";
import { useContext, ChangeEvent } from "react";
import { DepositContext } from "../../contexts/DepositContext";
import { ThemeContext } from "../../contexts/ThemeContext";
type Money = number & { readonly type: unique symbol };

type TDepositContext = {
  operation: string;
  date: string;
  time: string;
  note: string;
  brutto: Money;
  sumDeposit: Money;
  setOperation: (value: string) => void;
  setTime: (value: string) => void;
  setDate: (value: string) => void;
  setNote: (value: string) => void;
  setBrutto: (value: Money) => void;
  handleSubmit: (value: Function) => void;
  showToastMessage: () => void;
  setSumDeposit: (value: Money) => void;
};
type TThemeContext = {
  theme: boolean;
};

const DepositContainer = () => {
  const { theme } = useContext(ThemeContext) as TThemeContext;
  const {
    operation,
    date,
    time,
    note,
    brutto,
    sumDeposit,
    setDate,
    setTime,
    setNote,
    setOperation,
    setBrutto,
    handleSubmit,
    showToastMessage,
    setSumDeposit,
  } = useContext(DepositContext) as TDepositContext;

  const operationHandler = (event: ChangeEvent<HTMLOptionElement>) => {
    const operation = event.target.value;
    setOperation(operation);
  };
  const dateHandler = (event: ChangeEvent<HTMLDataElement>) => {
    const date = event.target.value;
    setDate(date);
  };
  const timeHandler = (event: ChangeEvent<HTMLTimeElement>) => {
    const time = event.target.value;
    setTime(time);
  };
  const bruttoHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const brutto = event.target.value;
    setBrutto(brutto);
  };
  const noteHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const note = event.target.value;
    setNote(note);
  };
  const handleSave = () => {
    handleSubmit();
    showToastMessage();
  };

  return (
    <DepositPresenter
      operationHandler={operationHandler}
      dateHandler={dateHandler}
      timeHandler={timeHandler}
      bruttoHandler={bruttoHandler}
      noteHandler={noteHandler}
      handleSave={handleSave}
      setSumDeposit={setSumDeposit}
      operation={operation}
      date={date}
      time={time}
      note={note}
      brutto={brutto}
      sumDeposit={sumDeposit}
      theme={theme}
    />
  );
};

export default DepositContainer;
