import { useState, useContext, useEffect } from "react";
import DebtorListPresenter from "./DebtorListPresenter";
import { ThemeContext } from "../../contexts/ThemeContext";
import { LocalStorage } from "../../services/LocalStorage.service";
import axios from "axios";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

const DebtorListContainer = () => {
  const [reasonForLoan, setReasonForLoan] = useState([
    { value: "Wybierz typ pożyczki", label: "Wybierz typ pożyczki" },
    { value: "Konsumpcja", label: "Konsumpcja" },
    { value: "Założenie inwestycji", label: "Założenie inwestycji" },
  ]);
  const [googleUser, setGoogleUser] = useState({
    access_token: LocalStorage.get("accessToken") || "",
  });
  const [profile, setProfile] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    try {
      if (googleUser.access_token) {
        axios
          .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`,
            {
              headers: {
                Authorization: `Bearer ${googleUser.access_token}`,
                Accept: "application/json",
              },
            },
          )
          .then((response) => {
            setProfile(response.data);
            LocalStorage.set("accessToken", googleUser.access_token);
          })
          .catch((error) => {
            console.error("Błąd podczas pobierania danych użytkownika:", error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }, [googleUser]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleUser(codeResponse),
    onError: (error) => console.log("Logowanie nie powiodło się:", error),
  });

  const logOut = () => {
    googleLogout();
    setProfile(null);
    LocalStorage.remove("accessToken");
  };

  const [debtorList, setDebtorList] = useState([
    {
      id: Math.random(),
      name: "",
      dateOfDebtor: "",
      repayment: "",
      amount: 0,
      typeLoan: "",
    },
  ]);
  const [row, setRow] = useState([]);
  const handleDebtor = (event) => {
    const { name, value } = event.target;
    setDebtorList((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRow([
      ...row,
      {
        id: Math.random(),
        name: debtorList.name,
        dateOfDebtor: debtorList.dateOfDebtor,
        repayment: debtorList.repayment,
        amount: debtorList.amount,
        typeLoan: debtorList.typeLoan,
      },
    ]);
  };
  const removeRow = (id) => {
    setRow(row.filter((row) => row.id !== id));
  };

  return (
    <DebtorListPresenter
      reasonForLoan={reasonForLoan}
      handleSubmit={handleSubmit}
      handleDebtor={handleDebtor}
      removeRow={removeRow}
      row={row}
      debtorList={debtorList}
      theme={theme}
      setRow={setRow}
      setDebtorList={setDebtorList}
      googleUser={googleUser}
      logOut={logOut}
      login={login}
      profile={profile}
    />
  );
};

export default DebtorListContainer;
