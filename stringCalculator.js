function add(string) {
    if (string === "") {
        return 0;
    }
    const numbers = string.split(",").map((number) => parseInt(number));
    if (numbers.length === 1) {
        return numbers[0];
    }
    return numbers.reduce((acc, number) => acc + number);
}

export {
    add
};