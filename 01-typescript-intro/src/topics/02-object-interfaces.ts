const skills: string[] = ['Bash','Counter','Healing']

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; //Variable Optional
}

const Darius: Character = {
    name: 'Dairus',
    hp: 1000,
    skills: ['Bash','Counter'],
};

//Si no esta declarada la variable puedo definirla afuera del objeto
//Darius.hometown = 'Artigas';

//Si no esta una variable Optional, no te la muestra
console.table(Darius);

export{}