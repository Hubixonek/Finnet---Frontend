import axios from "axios";

export const fetchData = async (
  fromCurrency: string,
  toCurrency: string,
  setCurrencies: any
) => {
  try {
    const response = await axios.get(
      `https://api.nbp.pl/api/exchangerates/tables/A/?format=json${
        fromCurrency && toCurrency
      }`
    );
    const allCurrencies = response.data[0].rates.map((rate:string) => ({
      code: rate.code,
      name: rate.currency,
      rate: rate.mid,
    }));
    setCurrencies(allCurrencies);
  } catch (error) {
    console.error("Błąd przy pobieraniu danych", error);
  }
};
