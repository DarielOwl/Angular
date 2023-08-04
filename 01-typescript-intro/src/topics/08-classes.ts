
//*NO definiendo los constructores
// export class Person {
//     public name: string;
//     private address: string;

//     constructor() {
//         this.name = 'Fernando';
//         this.address = 'New York';
//     }
// }
//const ironman = new Person();

//*Definiendo los constructores
// export class Person {
//     public name: string;
//     private address: string;

//     constructor(name:string, address:string) {
//         this.name = name;
//         this.address = address;
//     }
// }
// const ironman = new Person('IronMan','New York');

//Nueva forma que implementa angular
export class Person {
    constructor(
        public name:string,
        private address:string = 'No Address'    
    ) {}
}

export class Hero extends Person {
    constructor(
        public alterEgo:string,
        public age:number,
        private realName:string    
    ) {
        super(realName,'Miami');
    }
}

const ironman = new Hero('IronMan',45,'Tony');

console.log(ironman);

//*TypeScript compila su codigo en JavaScript, 
//*por ende se puede acceder a la variable privada 
//*como este ejemplo:
//console.log(ironman.address);