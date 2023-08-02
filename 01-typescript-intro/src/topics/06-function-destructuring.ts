interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150,
}

const tablet: Product = {
    description: 'Ipad Air',
    price: 250,
}

interface TaxCalculatiuonOptions {
    tax: number;
    products: Product[];
}

//function taxCalculation( options: TaxCalculatiuonOptions ): [number,number] {
//function taxCalculation( {tax, products}: TaxCalculatiuonOptions ): [number,number] {
function taxCalculation( options: TaxCalculatiuonOptions ): [number,number] {
    const {tax,products} = options;
    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [ total,taxTotal ] = taxCalculation({
    products: shoppingCart,
    tax: tax, //tax, == tax: tax,
})

console.log('Total: ', total);
console.log('Total: ', taxTotal);

export{};