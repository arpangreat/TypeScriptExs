type combinableString =(number | string);
type combinableResult =("as number" | "as String");

function combine(input1: combinableString, input2: combinableString, resultConversion: combinableResult) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === "as number") {
        result = +input1 + +input2; 
    } else {
        result = input1.toString() + input2.toString();
    }

     // if (resultConversion === "as number") {
      //   return +result; 
     // } else {
      //    return result.toString();
      //} 
    return result;
}

const combineAges = combine(78, 90 , "as number");
const combineNames = combine('Swastik', 'Acharyya', "as String");
const combineStringAges = combine('30', '21', "as number");

console.log(combineAges);
console.log(combineNames);
console.log(combineStringAges);
