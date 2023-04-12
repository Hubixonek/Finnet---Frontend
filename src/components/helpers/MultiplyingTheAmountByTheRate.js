const MultiplyingTheAmountByTheRate = (value, rate) => {
	if (rate) {
		return (value * rate).toFixed(2);
	} else {
		return '';
	}
};
export default MultiplyingTheAmountByTheRate;
