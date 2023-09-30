export type TFundsFormPresenterProps = {
    fromCurrency: string;
    toCurrency: string;
    funds: [];
    currencies: [];
    rate: number;
    theme: boolean;
    handleRemoveFundsData: Function;
    fromCurrencyChangeHandler: Function;
    toCurrencyChangeHandler: Function;
    formik: any;
    postData: Function;
  };