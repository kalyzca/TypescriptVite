import { type Product, taxCalculation} from "./08-function-destructuring";

const shoppingCart:Product[] = [
    {
        description: "Rice",
        price: 4.0,
    },
    {
        description:"Iphone",
        price:120.00
    }
];

const [ total, tax ] = taxCalculation({
    tax: 0.15,
    products:shoppingCart
});

console.log("Productos => ",shoppingCart);
console.log("Total", total);
console.log("Tax", tax);

export {};

