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

function taxCalculation( options: TaxCalculatiuonOptions ): number[] {
    let total = 0;

    options.products.forEach( product => {
        total += product.price;
    });

    return [total, total * options.tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation({
    products: shoppingCart,
    tax: tax, //tax, == tax: tax,
})

console.log('Total: ', result[0]);
console.log('Total: ', result[1]);

export{};