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
nombre:remy
         
nota: randomici entre 2-10
mostrar la nota mayor ,menor y promedio
listar las notas
insuficiente:[2,4]
suficiente:[5,6]
bien:[7,8]
notable:[9]
sobresaliente:[10]
*/


//Introducimos los 10 elementos
/*
let estudiantes = remy
    


*/
/*
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
let sumaNotas = estudiantes[0].nota;

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
*/
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
function cargarNotas(){
    notas.forEach(nota=>{
        nota.nota = genRandomico(10,2);
    });
};
console.log ("numero random:"+genRandomico(10,2));
function impNota(){

    nota.forEach(nota=>{
        switch(nota.nota){
            case 2: case 3: case 4:
                $clasificar="insuficiente";
                break;
            case 5: case 6:
                $clasificar="suficiente";
                break;
            case 7: case 8:
                $clasificar="bien";
                break;
            case 9:
                $clasificar="notable";
                break;
            case 10:
                $clasificar="sobresaliente";
                break;
            default:
                $clasificar="fuera de rango";

            }
        console.log(nota.nombre+"-"+nota.nota+":"+fclasificar(nota.nota)+"\n");
    })
}
cargarNotas();
impNota();
*/
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

function genRandomico (max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cargarNotas(){
    estudiantes.forEach(estudiante=>{
        estudiante.nota = genRandomico(10, 2);
    });
}

function clasificar(nota){
    switch(nota){
        case 2: case 3: case 4:
            return "insuficiente";
        case 5: case 6:
            return "suficiente";
        case 7: case 8:
            return "bien";
        case 9:
            return "notable";
        case 10:
            return "sobresaliente";
        default:
            return "fuera de rango";
    }
}

function impNota(){
    estudiantes.forEach(estudiante=>{
        console.log(estudiante.nombre + "-" + estudiante.nota + ":" + clasificar(estudiante.nota) + "\n");
    });
}

cargarNotas();
impNota();

/*
//console.log(estudiantes)
estudiantes.forEach (nota=>{
    nota.nota=Math.floor(Math.random()*(10-2+1));
});

/*estudiantes.forEach(nota =>{
    let $clasificar;
    switch(nota.nota){
        case 2: case 3: case 4:
            $clasificar="insuficiente";
            break;
        case 5: case 6:
            $clasificar="suficiente";
            break;
        case 7: case 8:
            $clasificar="bien";
            break;
        case 9:
            $clasificar="notable";
            break;
        case 10:
            $clasificar="sobresaliente";
            break;
    }
    console.log(nota.nombre+"-"+nota.nota+":"+$clasificar+"\n");
})
/*
// Encontrar la nota mayor, la nota menor y el promedio
let notaMayor = estudiantes[0].nota;
let notaMenor = estudiantes[0].nota;
let sumaNotas = estudiantes[0].nota;

estudiantes.forEach(estudiante => {
    switch (true){

    }
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
*/