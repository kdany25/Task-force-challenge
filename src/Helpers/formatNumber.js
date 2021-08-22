const formatNumber = (number) => {
    return number.toLocaleString(undefined, { minimumFractionDigits: 2 });
}

export default formatNumber;