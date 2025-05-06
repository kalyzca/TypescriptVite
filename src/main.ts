import './style.css';
// import './Topics/01-basic-types'; //* La extensión ts esta sobreentendida 
// import './Topics/02-object-interface';
// import './Topics/03-functions';
import  './Topics/04-functions-with-arguments';
const app =document.querySelector<HTMLDivElement>('#app');
app!.innerHTML="Hola mundo!";
console.log(app);