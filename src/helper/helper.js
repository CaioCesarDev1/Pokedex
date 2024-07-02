export const FormatId = (id) => {
    return String(id).padStart(3, '0');
};

export const CapitalizeFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
};

export const FormatNumber = (number) => {
    const numberString = number.toString();
    const length = numberString.length;

    if (length === 1) {
        return "0," + numberString;
    }

    const formattedNumber = numberString.slice(0, length - 1) + ',' + numberString.slice(length - 1);
    return formattedNumber;
}