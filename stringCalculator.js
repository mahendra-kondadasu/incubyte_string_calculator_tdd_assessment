function add(string) {
    if (string === "") {
        return 0;
    }
    const stringAfterReplacingNewLine = string.replaceAll("\n", ",");
    const delimiter = getDelimeter(string);
    const stringAfterReplacingDelimeter = stringAfterReplacingNewLine.replaceAll(delimiter, ",");
    const numbers = stringAfterReplacingDelimeter.split(",").map((number) => parseInt(number)).filter((number) => !isNaN(number));
    const filterNumbersGreaterThan1000 = numbers.filter((number) => number <= 1000);
    const negativeNumbers = filterNumbersGreaterThan1000.filter((number) => number < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
    }
    if (filterNumbersGreaterThan1000.length === 1) {
        return filterNumbersGreaterThan1000[0];
    }
    return filterNumbersGreaterThan1000.reduce((acc, number) => acc + number);
}

function getDelimeter(string) {
    const delimiterStartIndex = string.indexOf("//");
    if (delimiterStartIndex !== -1) {
        return string[delimiterStartIndex + 2];
    }
    return null;
}

export {
    add,
    getDelimeter
};