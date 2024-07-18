import Cl_personas from "./Cl_personas.js";
import Cl_procesarPersonas from "./Cl_procesarPersonas.js";

let persona1 = new Cl_personas("Luis", "M", 15);
let persona2 = new Cl_personas("Ana", "F", 19);
let persona3 = new Cl_personas("José", "M", 21);
let persona4 = new Cl_personas("Carmen", "F", 17);
let persona5 = new Cl_personas("Rosa", "F", 18);
let persona6 = new Cl_personas("José", "M", 22);
let persona7 = new Cl_personas("María", "F", 17);
let persona8 = new Cl_personas("Luz", "F", 19);
let persona9 = new Cl_personas("Rafael", "M", 23);
let persona10 = new Cl_personas("Liz", "F", 15);
let persona11 = new Cl_personas("Marcos", "M", 20);
let persona12 = new Cl_personas("Leo", "M", 16);

let procesarPersonas = new Cl_procesarPersonas();

procesarPersonas.procesarPersonas(persona1);
procesarPersonas.procesarPersonas(persona2);
procesarPersonas.procesarPersonas(persona3);
procesarPersonas.procesarPersonas(persona4);
procesarPersonas.procesarPersonas(persona5);
procesarPersonas.procesarPersonas(persona6);
procesarPersonas.procesarPersonas(persona7);
procesarPersonas.procesarPersonas(persona8);
procesarPersonas.procesarPersonas(persona9);
procesarPersonas.procesarPersonas(persona10);
procesarPersonas.procesarPersonas(persona11);
procesarPersonas.procesarPersonas(persona12);

let salida = document.getElementById("salida");
salida.innerHTML += `<br> Edad promedio: ${procesarPersonas
  .edadP()
  .toFixed(2)}`;
salida.innerHTML += `<br> Edad mayor entre las mujeres: ${procesarPersonas.edadMM()}`;
