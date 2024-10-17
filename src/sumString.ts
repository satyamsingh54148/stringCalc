export function SumOfString(input: string): number{
    var result = 0;
    var newLineIndex = -1;
    var arr: string[];
    let negatives: string[] = [];
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
            let no = Number(arr[i]);
            if (no>=1000){
                continue;
            }else if (no >= 0){
                result += no;
            } else{
                negatives.push(arr[i]);
            }
        }
        if (negatives.length>0){
            throw new Error(`Negative Number not allowed: ${negatives.join(", ")}`);   
        }
    }
    return result;
}