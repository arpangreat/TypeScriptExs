function sum(n1: number, n2: number) {
    return n1 + n2; 
}

function printResult(num: number): void { // WE CAN ALSO TYPE undefined
         console.log('Result: '+ num);
}


printResult(sum(45, 65));

let combine: (a: number, b: number) => number;

combine = sum;

console.log(combine(8, 9));

function addAndHandle(num1: number, num2: number, cb: (num: number) => void) {
   const result = num1 + num2; 
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
});

