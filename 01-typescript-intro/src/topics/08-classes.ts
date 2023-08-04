
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
        public firstName:string,
        public lastName:string,
        private address:string = 'No Address'    
    ) {}
}

//*Implementar la clase Person como Herencia
// export class Hero extends Person {
//     constructor(
//         public alterEgo:string,
//         public age:number,
//         private realName:string    
//     ) {
//         super(realName,'Miami');
//     }
// }

//*Implementar la clase Person como Composicion
export class Hero {
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person:Person,    
    ) {}
}

const tony = new Person('JhonnyBravo','Stark')
const ironman = new Hero('IronMan',45,'Tony',tony);

console.log(ironman);

//*TypeScript compila su codigo en JavaScript, 
//*por ende se puede acceder a la variable privada 
//*como este ejemplo:
//console.log(ironman.address);