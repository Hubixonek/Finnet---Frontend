import { useState, useEffect } from "react";
import DebtorTablePresenter from "./DebtorTablePresenter";
import { LocalStorage } from "../../services/LocalStorage.service";
import axios from "axios";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { google } from "googleapis";

const DebtorTableContainer = ({ row, removeRow, reasonForLoan, setRow }) => {
  const [editId, setEditId] = useState(-1);
  const [updatedData, setUpdatedData] = useState({});
  const [googleUser, setGoogleUser] = useState({
    access_token: LocalStorage.get("accessToken") || "",
  });
  const [profile, setProfile] = useState([]);
  console.log(row);
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
            }
          )
          .then((response) => {
            setProfile(response.data);
            LocalStorage.set("accessToken", googleUser.access_token);
          })
          .catch((error) => {
            console.error("Błąd podczas pobierania danych użytkownika:", error);
          });
      }
      console.log(googleUser);
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

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleEditDebtor = (id) => {
    const updatedRows = row.map((rows) => {
      if (rows.id === id) {
        return { ...rows, ...updatedData };
      }
      return rows;
    });
    setRow(updatedRows);
    setEditId(-1);
  };
  console.log(updatedData);
  return (
    <DebtorTablePresenter
      removeRow={removeRow}
      handleEdit={handleEdit}
      handleEditDebtor={handleEditDebtor}
      updatedData={updatedData}
      setUpdatedData={setUpdatedData}
      row={row}
      reasonForLoan={reasonForLoan}
      editId={editId}
      logOut={logOut}
      login={login}
      profile={profile}
    />
  );
};

export default DebtorTableContainer;
