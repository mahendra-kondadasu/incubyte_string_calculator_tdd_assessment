function add(string) {
    if (string === "") {
        return 0;
    }
    const stringAfterReplacingNewLine = string.replaceAll("\n", ",");
    const delimiter = getDelimeter(string);
    const stringAfterReplacingDelimeter = stringAfterReplacingNewLine.replaceAll(delimiter, ",");
    const numbers = stringAfterReplacingDelimeter.split(",").map((number) => parseInt(number)).filter((number) => !isNaN(number));
    const negativeNumbers = numbers.filter((number) => number < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
    }
    if (numbers.length === 1) {
        return numbers[0];
    }
    return numbers.reduce((acc, number) => acc + number);
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