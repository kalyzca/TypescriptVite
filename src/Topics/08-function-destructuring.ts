interface Product {
    description: string;
    price: number;
}

interface TaxCalculationsOptions {
    tax: number;
    products: Product[];
}

const phone: Product = {
    description: "Motorola",
    price: 960.0
}

const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}

// !Destructuracion de función 1
function taxCalculation( options: TaxCalculationsOptions): [ number,number ] {
    
    const { tax, products} = options; //para varios argumentos en la función

    let total = 0;

    // ! Destructuración de product
    products.forEach( ({price}) => {
        total += price;
    });

    return [ total, total *  tax ];
}


/* function taxCalculation( options: TaxCalculationsOptions): number[] {
// function taxCalculation( { tax,products }: TaxCalculationsOptions): [ number,number ] {
    
    let total = 0;

    options.products.forEach( product => {
        total += product.price;
    });
    
    return [ total, total * options.tax ];
}  */


const shoppingCar = [ phone, tablet ];

const tax = 0.15;

// ! Desestructuración de la función 02
const [ total, taxTotal ] = taxCalculation({
    products: shoppingCar,
    tax,
})
console.log("Total ",total);
console.log("Tax",taxTotal);


/* const result = taxCalculation({
    products: shoppingCar,
    tax,
})
console.log("Total de result[0] =",result[0]);
console.log("Tax de result[1] = ",result[1]); */

export {}