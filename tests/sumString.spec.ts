import { SumOfString } from "../src/sumString";

describe('sumNumbersInString', () => {
    it('Empty String', () => {
      expect(SumOfString('')).toBe(0);
    });
    it('one number',()=>{
        expect(SumOfString('123')).toBe(123)
    });
    it('space seperated 2 number',()=>{
        expect(SumOfString('12 34')).toBe(46)
    });
    it('space seperated 3 number',()=>{
        expect(SumOfString('10 15 35')).toBe(60)
    });
    it('space seperated 4 number',()=>{
        expect(SumOfString('5 6 8 23')).toBe(42)
    });
    it('comma seperated 2 number',()=>{
        expect(SumOfString('12,34')).toBe(46)
    });
    it('comma seperated 3 number',()=>{
        expect(SumOfString('10,15,35')).toBe(60)
    });
    it('comma seperated 4 number',()=>{
        expect(SumOfString('5,6,8,23')).toBe(42)
    });
    it('newline seperated 2 number',()=>{
        expect(SumOfString('12\n34')).toBe(46)
    });
    it('mixed seperators 5 number',()=>{
        expect(SumOfString('1\n2,3 4\n5')).toBe(15)
    });
    it('mixed seperators 7 number',()=>{
        expect(SumOfString('10,15 3\n5,6\n2 7')).toBe(48)
    });
    it('mixed seperators 11 number',()=>{
        expect(SumOfString('5\n6,8 9,21\n67\n7 6 11,17 23')).toBe(180)
    });
    it('multiple seperators together',()=>{
        expect(SumOfString('1\n 5, 9')).toBe(15)
    })
    it('custom single seperator',()=>{
        expect(SumOfString('//;\n1;5;9')).toBe(15)
    })
    it('custom multiple character seperator',()=>{
        expect(SumOfString('//[;;;]\n1;;;5;;;9')).toBe(15)
    })
    it('custom multiple character seperator',()=>{
        expect(SumOfString('//[***]\n1***5***9')).toBe(15)
    })
    it('custom single character multiple seperators',()=>{
        expect(SumOfString('//[*][%]\n1*2%3')).toBe(6)
    })
    it('custom multiple character multiple seperators',()=>{
        expect(SumOfString('//[***] [;;;]\n1***5;;;9')).toBe(15)
    })
    it('Negative number',()=>{
        expect(()=>SumOfString('1,2,-3,4')).toThrow("Negative Number not allowed: -3")
    })
    it('Negative numbers',()=>{
        expect(()=>SumOfString('1,-2,-3,4')).toThrow("Negative Number not allowed: -2, -3")
    })
    
})