const dbz: string[] = ["Goku", "Vegeta","Trunks"];

const trunks = dbz[3] || "No hay personaje";

console.error("Personaje 3 =>", dbz[3] || "Personaje no encontrado");

console.error(trunks);

// ! Desestructuración de arreglos
const [ p1, p2, p3= "Not found" ]: string[] = ["Alicia", "Blanca"];
console.log("p1", p1);
console.log("p2", p2);
console.error("p3", p3);
