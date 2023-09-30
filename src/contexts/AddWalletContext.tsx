import { createContext, useState } from "react";

const AddWalletContext = createContext();

const AddWalletProvider = ({ children }: any) => {
  const [nameAndCurrencyWallet, setNameAndCurrencyWallet] = useState([]);

  return (
    <AddWalletContext.Provider
      value={{ nameAndCurrencyWallet, setNameAndCurrencyWallet }}>
      {children}
    </AddWalletContext.Provider>
  );
};
export { AddWalletContext, AddWalletProvider };
