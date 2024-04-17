/*
let a=10;
let b=5;
a+=1;
console.log(a);
a=a+b;
console.log("a=a+b : "+a);
a=11;
a+=b;
console.log("a+=b : "+a);
a++;
console.log("a++ : "+a);
a--;
console.log("a-- : "+a);

if ((a%2)==0)
console.log("a es PAR");
else
console.log ("a es IMPAR");
console.log (a+b+Number("5"));
*/
/*generar un array de 10 elementos
nombre:{nombre:"Remy",Nota:0},
{nombre:"Carmen",Nota:0},
{nombre:"Daniel",Nota:0},
{nombre:"Pedro",Nota:0},
{nombre:"Kevin",Nota:0},
{nombre:"Jose",Nota:0},
{nombre:"Jesus",Nota:0},
{nombre:"Luis",Nota:0},
{nombre:"Juan",Nota:0}];
         
nota: randomici entre 20-100
mostrar la nota mayor ,menor y promedio*/


//Introducimos los 10 elementos
/*
let estudiantes = [{nombre:"Remy",Nota:0},
               {nombre:"Carmen",Nota:0},
               {nombre:"Daniel",Nota:0},
               {nombre:"Pedro",Nota:0},
               {nombre:"Kevin",Nota:0},
               {nombre:"Jose",Nota:0},
               {nombre:"Jesus",Nota:0},
               {nombre:"Luis",Nota:0},
               {nombre:"Juan",Nota:0}];
    let nota = Math.floor(Math.random)()



*/

// Función para generar un número aleatorio entre un rango dado
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generar el array de 10 elementos con nombres predefinidos y notas aleatorias
let estudiantes = [
    { nombre: "Remy", nota: getRandomNumber(20, 100) },
    { nombre: "Carmen", nota: getRandomNumber(20, 100) },
    { nombre: "Daniel", nota: getRandomNumber(20, 100) },
    { nombre: "Pedro", nota: getRandomNumber(20, 100) },
    { nombre: "Kevin", nota: getRandomNumber(20, 100) },
    { nombre: "Jose", nota: getRandomNumber(20, 100) },
    { nombre: "Jesus", nota: getRandomNumber(20, 100) },
    { nombre: "Luis", nota: getRandomNumber(20, 100) },
    { nombre: "Juan", nota: getRandomNumber(20, 100) }
];
console.log("Array de los 10 elementos");
console.log(estudiantes)
// Encontrar la nota mayor, la nota menor y el promedio
let notaMayor = estudiantes[0].nota;
let notaMenor = estudiantes[0].nota;
let sumaNotas = 0;

estudiantes.forEach(estudiante => {
    if (estudiante.nota > notaMayor) {
        notaMayor = estudiante.nota;
    }
    if (estudiante.nota < notaMenor) {
        notaMenor = estudiante.nota;
    }
    sumaNotas += estudiante.nota;
});

let promedio = sumaNotas / estudiantes.length;

// Mostrar resultados
console.log("Nota mayor: " + notaMayor);
console.log("Nota menor: " + notaMenor);
console.log("Promedio: " + promedio.toFixed(2));




