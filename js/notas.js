/*
let estudiantes = [
    { nombre: "Remy", nota: 0},
    { nombre: "Carmen", nota: 0 },
    { nombre: "Daniel", nota: 0 },
    { nombre: "Pedro", nota: 0},
    { nombre: "Kevin", nota: 0 },
    { nombre: "Jose", nota: 0 },
    { nombre: "Jesus", nota: 0 },
    { nombre: "Luis", nota: 0 },
    { nombre: "Juan", nota: 0 }
];
function genRandomico ($max,$min){
    return Math.floor(Math.random()*($max,$min+1));
};
*/
/*
generar un array y tomar como base los suiguentes arrays de nombres y apellidos, los elemento debe ser agregados randonicamente tomando como base una cantidad de elementos
crear un arry de 20 nombres
crear un array de 20apellidos 
aleatoriamente
*/
/*
const nombres = ["Juan", "Maria", "Pedro", "Ana", "Luis", "Laura", "Carlos", "Sofia", "Diego", "Valentina", "Andres", "Camila", "Jose", "Juliana", "Miguel", "Paula", "Daniel", "Fernanda", "David", "Isabella"];
const apellidos = ["Garcia", "Martinez", "Rodriguez", "Lopez", "Hernandez", "Gonzalez", "Perez", "Sanchez", "Ramirez", "Torres", "Flores", "Diaz", "Vasquez", "Reyes", "Alvarez", "Jimenez", "Rojas", "Mendoza", "Suarez", "Castillo"];

// Función para generar un array aleatorio con una cantidad específica de elementos de una lista
function generarArrayAleatorio(lista, cantidad) {
  const arrayAleatorio = [];
  for (let i = 0; i < cantidad; i++) {
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    arrayAleatorio.push(lista[indiceAleatorio]);
  }
  return arrayAleatorio;
}

// Generar un array de 20 nombres aleatorios
const nombresAleatorios = generarArrayAleatorio(nombres, 20);

function nombreCopleto = (nombres + apellidos);

// Generar un array de 20 apellidos aleatorios
const apellidosAleatorios = generarArrayAleatorio(apellidos, 20);

// Mostrar los arrays generados
console.log("Nombres aleatorios:");
console.log(nombresAleatorios);
console.log("\nApellidos aleatorios:");
console.log(apellidosAleatorios);
*/



// Definición de los arrays de nombres y apellidos
let nombres = ["Juan", "Maria", "Pedro", "Ana", "Luis", "Laura", "Carlos", "Sofia", "Diego", "Valentina", "Andres", "Camila", "Jose", "Juliana", "Miguel", "Paula", "Daniel", "Fernanda", "David", "Isabella"];
let apellidos = ["Garcia", "Martinez", "Rodriguez", "Lopez", "Hernandez", "Gonzalez", "Perez", "Sanchez", "Ramirez", "Torres", "Flores", "Diaz", "Vasquez", "Reyes", "Alvarez", "Jimenez", "Rojas", "Mendoza", "Suarez", "Castillo"];

// Función para generar un array aleatorio con una cantidad específica de elementos de una lista
function generarArrayAleatorio(lista, cantidad) {
  let arrayAleatorio = [];
  for (let i = 0; i < cantidad; i++) {
    let indiceAleatorio = Math.floor(Math.random() * lista.length);
    arrayAleatorio.push(lista[indiceAleatorio]);
  }
  return arrayAleatorio;
}

// Función para generar un array de nombres completos aleatorios
function generarNombresCompletos(nombres, apellidos, cantidad) {
  let nombresAleatorios = generarArrayAleatorio(nombres, cantidad);
  let apellidosAleatorios = generarArrayAleatorio(apellidos, cantidad);
  let nombresCompletos = [];
  for (let i = 0; i < cantidad; i++) {
    const nombreCompleto = nombresAleatorios[i] + " " + apellidosAleatorios[i];
    nombresCompletos.push(nombreCompleto);
  }
  return nombresCompletos;
}

// Generar un array de 10 nombres completos aleatorios
const cantidadNombresCompletos = 10; // Cambia la cantidad según lo que necesites
const nombresCompletosAleatorios = generarNombresCompletos(nombres, apellidos, cantidadNombresCompletos);

// Mostrar los nombres completos generados
console.log("Nombres completos aleatorios:");
console.log(nombresCompletosAleatorios);




