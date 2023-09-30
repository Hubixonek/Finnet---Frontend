import { useContext, ChangeEvent } from "react";
import { DepositContext } from "../../contexts/DepositContext";
import { DisplayContext } from "../../contexts/DisplayDepositContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { TThemeContext } from "../../types/themecontext";
import DisplayedDepositPresenter from "./DisplayedDepositPresenter";
import { TMoney } from "../../types/money";

type TDepositContext = {
  operation: string;
  date: string;
  time: string;
  note: string;
  brutto: TMoney;
  sumDeposit: TMoney;
  setOperation: (value: string) => void;
  setTime: (value: string) => void;
  setDate: (value: string) => void;
  setNote: (value: string) => void;
  setBrutto: (value: TMoney) => void;
  handleSubmit: () => void;
  showToastMessage: () => void;
  setSumDeposit: (value: TMoney) => void;
};

type TDisplayContext = {
  displayDeposit: boolean;
  setDisplayDeposit: (value: boolean) => void;
};

const DisplayedDepositContainer = () => {
  const { displayDeposit, setDisplayDeposit } = useContext(
    DisplayContext
  ) as TDisplayContext;
  const { theme } = useContext(ThemeContext) as TThemeContext;
  const {
    date,
    time,
    note,
    brutto,
    sumDeposit,
    operation,
    setOperation,
    setTime,
    setDate,
    setNote,
    setBrutto,
    handleSubmit,
    showToastMessage,
    setSumDeposit,
  } = useContext(DepositContext) as TDepositContext;

  const hideDepositFormHandler = () => {
    setDisplayDeposit(!displayDeposit);
  };

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
  console.log(operation);

  return (
    <DisplayedDepositPresenter
      operationHandler={operationHandler}
      dateHandler={dateHandler}
      timeHandler={timeHandler}
      bruttoHandler={bruttoHandler}
      noteHandler={noteHandler}
      handleSave={handleSave}
      setSumDeposit={setSumDeposit}
      hideDepositFormHandler={hideDepositFormHandler}
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

export default DisplayedDepositContainer;
