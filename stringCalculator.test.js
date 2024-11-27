import { add, getDelimeter } from './stringCalculator.js';

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

});

describe('getDelimeter', () => {
    it('should return ; when given //;\n1;2;3', () => {
        expect(getDelimeter("//;\n1;2,3")).toBe(";");
    });

    it('should return a when given //a\n1a2a3', () => {
        expect(getDelimeter("//a\n1a2a3")).toBe("a");
    });
});