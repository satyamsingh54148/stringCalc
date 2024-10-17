export function SumOfString(input: string): number{
    var result = 0;
    var arr: string[];
    let seperators = /[\s,]+/;
    if (input !== ""){
        arr = input.split(seperators);
        for (let i in arr){
            result += Number(arr[i]);
        }
    }
    return result;
}