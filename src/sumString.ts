export function SumOfString(input: string): number{
    var result = 0;
    var arr: string[];
    if (input !== ""){
        arr = input.split(" ")
        for (let i in arr){
            result += Number(arr[i])
        }
    }
    return result
}