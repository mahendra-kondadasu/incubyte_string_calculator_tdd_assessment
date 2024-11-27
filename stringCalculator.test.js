import { add, getDelimeters, replaceDelimiters } from './stringCalculator.js';

describe('add', () => {
    it('should return 0 when given an empty string', () => {
        expect(add("")).toBe(0);
    });

    it('should return 1 when given "1"', () => {
        expect(add("1")).toBe(1);
    });

    it('should return 3 when given 1,2', () => {
        expect(add("1,2")).toBe(3);
    });

    it('should return 10 when given 1,2,3,4', () => {
        expect(add("1,2,3,4")).toBe(10);
    });

    it('should return 6 when given 1\n2,3', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    it('should return 6 when given //;\n1;2;3', () => {
        expect(add("//;\n1;2,3")).toBe(6);
    });

    it('should return 6 when given //a\n1a2a3', () => {
        expect(add("//a\n1a2a3")).toBe(6);
    });

    it('should throw an exception when given -1', () => {
        expect(() => add("-1")).toThrow("negative numbers not allowed -1");
    });

    it('should throw an exception when given -1,-2', () => {
        expect(() => add("-1,-2")).toThrow("negative numbers not allowed -1,-2");
    });

    it('should return 2 when given 2,1001', () => {
        expect(add("2,1001")).toBe(2);
    });

    it('should return 6 when given //[***]\n1***2***3', () => {
        expect(add("//[***]\n1***2***3")).toBe(6);
    });

    it('should return 6 when given //[*][%]\n1*2%3', () => {
        expect(add("//[*][%]\n1*2%3")).toBe(6);
    });

    it('should return 6 when given //[*][%][#]\n1*2%3#4', () => {
        expect(add("//[*][%][#]\n1*2%3#4")).toBe(10);
    });

    it('should return 6 when given //[*%][#]\n1*%2#3', () => {
        expect(add("//[*%][#]\n1*%2#3")).toBe(6);
    });

});

describe('getDelimeters', () => {
    it('should contain ; when given //;\n1;2;3', () => {
        expect(getDelimeters("//;\n1;2,3")).toContain(";");
    });

    it('should contain a when given //a\n1a2a3', () => {
        expect(getDelimeters("//a\n1a2a3")).toContain("a");
    });

    it('should contain *** when given //[***]\n1***2***3', () => {
        expect(getDelimeters("//[***]\n1***2***3")).toContain("***");
    });

    it('should contain * and % when given //[*][%]\n1*2%3', () => {
        expect(getDelimeters("//[*][%]\n1*2%3")).toContain("*", "%");
    });

    it('should contain *, # and % when given //[*][%][#]\n1*2%3#4', () => {
        expect(getDelimeters("//[*][%][#]\n1*2%3#4")).toContain("*", "%", "#");
    });

    it('should contain *% and # when given //[*%][#]\n1*%2#3', () => {
        expect(getDelimeters("//[*%][#]\n1*%2#3")).toContain("*%", "#");
    });
});

describe('replaceDelimiters', () => {
    it('should replace ; with , when given 1;2;3', () => {
        expect(replaceDelimiters("1;2;3", [";"], ",")).toBe("1,2,3");
    });

    it('should replace \n with , when given 1\n2,3', () => {
        expect(replaceDelimiters("1\n2,3", ["\n"], ",")).toBe("1,2,3");
    });

    it('should replace * with , when given 1*2*3', () => {
        expect(replaceDelimiters("1*2*3", ["*"], ",")).toBe("1,2,3");
    });

    it('should replace ; \n and // with , when given //;\n1;2;3', () => {
        expect(replaceDelimiters("//;\n1;2,3", [";", '\n', "//"], ",")).toBe(",,,1,2,3");
    });

    it('should replace a \n and // with , when given //a\n1a2a3', () => {
        expect(replaceDelimiters("//a\n1a2a3", ["a", "\n", "//"], ",")).toBe(",,,1,2,3");
    });

    it('should replace *** \n // [ and ] with , when given //[***]\n1***2***3', () => {
        expect(replaceDelimiters("//[***]\n1***2***3", ["***", "\n", "//", "[", "]"], ",")).toBe(",,,,,1,2,3");
    });

    it('should replace * % and # with , when given //[*][%]\n1*2%3', () => {
        expect(replaceDelimiters("//[*][%]\n1*2%3", ["*", "%", "#", "\n", "//", "[", "]"], ",")).toBe(",,,,,,,,1,2,3");
    });
});