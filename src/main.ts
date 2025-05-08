import "./style.css";

// import "./Topics/01-basic-types"; //* La extensión ts esta sobreentendida 
// import "./Topics/02-object-interface";
// import "./Topics/03-functions";
// import  "./Topics/04-functions-with-arguments";
// import "./Topics/05-homework-types";
// import "./Topics/06-objects-destructuring";
// import "./Topics/07-arrays-destructuring";
// import "./Topics/08-function-destructuring";
import "./Topics/09-import-export";

const app =document.querySelector<HTMLDivElement>("#app");
app!.innerHTML="Hola mundo!";

console.log(app);