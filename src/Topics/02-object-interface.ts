const skills: string[] = ["Angular","JS","React"];

interface Usuario {
    name: string;
    edad: number;
    genero:string;
    skills:string[];
    casada?: boolean; //* ? => opcional
}

const usuario: Usuario ={
    name: "Yessy",
    edad: 30,
    genero: "F",
    skills: ["Python", "Django", "Php"],
}

usuario.casada=true;

console.log(skills);

console.table(usuario);

export {};