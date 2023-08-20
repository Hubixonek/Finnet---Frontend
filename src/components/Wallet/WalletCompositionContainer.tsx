import { useContext, useEffect } from "react";
import { AddWalletContext } from "../../contexts/AddWalletContext";
import { DisplayContext } from "../../contexts/DisplayDepositContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { LocalStorage } from "../../services/LocalStorage.service";
import WalletCompositionPresenter from "./WalletCompositionPresenter";

const WalletCompositionContainer = () => {
  const { nameAndCurrencyWallet, setNameAndCurrencyWallet } =
    useContext(AddWalletContext);
  const { theme } = useContext(ThemeContext);
  const { displayDepositHandler, displayDeposit } = useContext(DisplayContext);

  useEffect(() => {
    const data = LocalStorage.get("wallet");
    if (data && data.length > 0) {
      setNameAndCurrencyWallet(data);
    }
  }, []);

  useEffect(() => {
    LocalStorage.set("wallet", nameAndCurrencyWallet);
  }, [nameAndCurrencyWallet]);
  if (nameAndCurrencyWallet == null) {
    return;
  }
  return (
    <WalletCompositionPresenter
      nameAndCurrencyWallet={nameAndCurrencyWallet}
      setNameAndCurrencyWallet={setNameAndCurrencyWallet}
      theme={theme}
      displayDepositHandler={displayDepositHandler}
      displayDeposit={displayDeposit}
    />
  );
};
export default WalletCompositionContainer;
