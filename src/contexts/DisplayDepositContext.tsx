import { createContext, useState } from "react";

const DisplayContext = createContext();

const DisplayDepositProvider = ({ children }) => {
  const [displayDeposit, setDisplayDeposit] = useState(false);

  const displayDepositHandler = () => {
    setDisplayDeposit(!displayDeposit);
  };

  return (
    <DisplayContext.Provider
      value={{ displayDeposit, setDisplayDeposit, displayDepositHandler }}>
      {children}
    </DisplayContext.Provider>
  );
};

export { DisplayContext, DisplayDepositProvider };
