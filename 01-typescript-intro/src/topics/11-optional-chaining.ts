export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia','Elizabeth'],
}

const returnChildrenNumber = ( passenger: Passenger ): number => {

    //*Se puede utilizar tambien el "Not Null Assertion Operation"
    //*Que seria: variable!
    //*Es una forma de indicar que la variable no sera nula (undefinide)
    //*Ejemplo: 
    //*const howManyChildren = passenger.children!.length;
   
    const howManyChildren = passenger.children?.length || 0;
    console.log( passenger.name, howManyChildren )
    return howManyChildren;
}

returnChildrenNumber(passenger1);