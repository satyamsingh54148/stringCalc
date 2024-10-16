import { SumOfString } from "../src/sumString";

describe('sumNumbersInString', () => {
    it('Empty String', () => {
      expect(SumOfString('')).toBe(0);
    });
    it('one number',()=>{
        expect(SumOfString('123')).toBe(123)
    });
})