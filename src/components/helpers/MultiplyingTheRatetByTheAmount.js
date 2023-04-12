const MultiplyingTheRateByTheAmount = (value, amount) => {
	if (amount) {
		return (value * amount).toFixed(2);
	} else {
		return '';
	}
};
export default MultiplyingTheRateByTheAmount;
