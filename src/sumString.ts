export function SumOfString(input: string): number{
    var result = 0;
    var newLineIndex = -1;
    var arr: string[];
    let seperators = /[\s,]+/;  // default regex for blank, newline and comma
    let multipleSeperator = /\[([^\]]+)\]/g; // regex to check multiple square brackets and copy content
    if (input !== ""){
        if (input.startsWith('//')){
            newLineIndex = input.indexOf('\n');
            if (newLineIndex !== -1){
                let seperatorString = input.substring(2,newLineIndex);

                let multiple = seperatorString.match(multipleSeperator);
                if (multiple){
                    seperatorString = multiple.join('|');
                }
                seperators = new RegExp(seperatorString);
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