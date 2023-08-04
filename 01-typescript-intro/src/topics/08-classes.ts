export class Person {
    public name: string;
    private address: string;

    constructor() {
        this.name = 'Fernando';
        this.address = 'New York';
    }
}

const ironman = new Person();

console.log(ironman);

//*TypeScript compila su codigo en JavaScript, 
//*por ende se puede acceder a la variable privada 
//*como este ejemplo:
//console.log(ironman.address);