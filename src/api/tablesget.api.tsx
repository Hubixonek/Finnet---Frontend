import axios from "axios";
import { API_URL } from "../utils/constants/api_tables_get_url";
import { useEffect } from "react";
const TablesGetApi = () => {
  const getTables = async () => {
    try {
      const response = axios.get(API_URL);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTables();
  }, []);
};

export default TablesGetApi;
