function addNumbers(a:number,b:number) {
    return a + b;
}
const result:number = addNumbers(1,2);
console.log( {result});


const addNumbersArrow = (a:number,b:number):string => {
    return `${a + b}`
}
const result2:string = addNumbersArrow(1,2);
console.log({result2});

function multiply(firstNumber:number,secondNumber?:number,base:number=2) {
    return firstNumber*base;
}
const multiplyResult:number = multiply(5);
console.log({multiplyResult});

export{}