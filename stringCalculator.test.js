import { add } from './stringCalculator.js';

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
});