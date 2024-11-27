function add(string) {
    if (string === "") {
        return 0;
    }
    const delimiters = getDelimeters(string);
    const stringAfterReplacingDelimiters = replaceDelimiters(string, delimiters, ",");
    const numbers = stringAfterReplacingDelimiters.split(",").map((number) => parseInt(number)).filter((number) => !isNaN(number));
    const negativeNumbers = numbers.filter((number) => number < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
    }
    const numbersLessThan1000 = numbers.filter((number) => number <= 1000);
    if (numbersLessThan1000.length === 1) {
        return numbersLessThan1000[0];
    }
    return numbersLessThan1000.reduce((acc, number) => acc + number);
}


function getDelimeters(string) {
    const delimeters = ["\n"];

    const delimiterStartIndex = string.indexOf("//");
    if (delimiterStartIndex !== -1) {
        const singleCharDelimiter = string[delimiterStartIndex + 2];
        if (singleCharDelimiter !== "[") {
            delimeters.push(singleCharDelimiter);
        }
    }

    const matches = string.match(/^\/\/(\[.*?\])+\n/);
    if (matches) {
        // Extract multiple delimiters inside brackets
        const multiDelimiters = matches[0]
            .match(/\[([^\]]+)\]/g)
            .map(delim => delim.slice(1, -1));
        delimeters.push(...multiDelimiters);
    }

    return delimeters;
}


function replaceDelimiters(input, delimiters, replacement) {
    return delimiters.reduce((result, delimiter) => result.replaceAll(delimiter, replacement), input);
}

export {
    add,
    getDelimeters,
    replaceDelimiters
};