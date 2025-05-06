interface  AudioPlayer{
    audioVolumne:number;
    songDuration:number;
    song:string;
    details:Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPayer: AudioPlayer = {
    audioVolumne: 90,
    songDuration: 36,
    song: "California",
    details: {
        author: "Paul Mack",
        year: 2010
    }
}

const song = "Amores como el nuestro";

// * Desestructuración
// ! Control + tecla espaciadora para seleccionar la clave del objeto
const { song:anotherSong, songDuration:duration, audioVolumne, details } =  audioPayer;

console.log("song ",song); //! Retorna valor de la constante song

console.log("song another =>", anotherSong); //! Retorna valor de la desestructuración song

console.log("duration ", duration);

console.log("audioVolumen => ", audioVolumne);

//* Otro ejemplo de desestructuración
// ! Deseo el autor del aobjeto audio player, para ello debo poner author en la consola.
const { author } = details;
console.log("details author => ", author);


export {};