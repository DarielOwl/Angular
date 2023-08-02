function addNumbers(a:number, b:number): number{
    return a + b;
}

//*Distintas formas de hacer la misma variable
//const addNumbersArrow = (a:number, b:number) => a + b;

/*const addNumbersArrow = (a:number, b:number) => {
   return a + b;
}*/

//*Una manera de retornar un string en una funcion
const addNumbersArrow = (a:number, b:number): string => {
   return `${a + b}`;
}

function multiply(fristNumber:number, secondNumber?:number, base = 2): number {
    return fristNumber * base;
}

const result1: number = addNumbers(1,2);
const result2: string = addNumbersArrow(1,2);
const multiplyResult: number = multiply(5);

console.log({result1,result2,multiplyResult});

export{};