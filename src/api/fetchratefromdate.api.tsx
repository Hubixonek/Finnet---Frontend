import axios from "axios";

export const fetchRateFromDate = async (
  fromCurrency: string,
  toCurrency: string,
  date: string
) => {
  if (!fromCurrency || !toCurrency) {
    return;
  }

  try {
    let ratesFrom, ratesTo;

    if (fromCurrency === "PLN") {
      ratesFrom = { mid: 1 };
    } else {
      const responseFromCurrency = await axios.get(
        `https://api.nbp.pl/api/exchangerates/rates/A/${fromCurrency}/${date}/`
      );
      ratesFrom = responseFromCurrency.data.rates[0];
    }

    if (toCurrency === "PLN") {
      ratesTo = { mid: 1 };
    } else {
      const responseToCurrency = await axios.get(
        `https://api.nbp.pl/api/exchangerates/rates/A/${toCurrency}/${date}/`
      );
      ratesTo = responseToCurrency.data.rates[0];
    }

    const selectedFromCurrency = ratesFrom.mid;
    const selectedToCurrency = ratesTo.mid;

    return {
      selectedFromCurrency,
      selectedToCurrency,
    };
  } catch (error) {
    console.error();
  }
};
