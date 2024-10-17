export function SumOfString(input: string): number{
    var result = 0;
    var newLineIndex = -1;
    var arr: string[];
    let seperators = /[\s,]+/;
    if (input !== ""){
        if (input.startsWith('//')){
            newLineIndex = input.indexOf('\n');
            if (newLineIndex !== -1){
                seperators = new RegExp(input.substring(2,newLineIndex));
                input = input.substring(newLineIndex+1);
            }
        }
        arr = input.split(seperators);
        for (let i in arr){
            result += Number(arr[i]);
        }
    }
    return result;
}