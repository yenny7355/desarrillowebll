//compras en unsuper mercado
/*
let carrito = ["leche",1,
               "carne",2,
               "papa",3,
               "fideos",1];
console.log("item:"+carrito[0]);
console.log("cantidad:"+carrito[1]);
console.log("item:"+carrito[2]);
console.log("cantidad:"+carrito[3]);
console.log("item:"+carrito[4]);
console.log("cantidad:"+carrito[5]);
console.log("item:"+carrito[6]);
console.log("cantidad:"+carrito[7]);

console.log("impresion completada");
carrito.push("lenteja",2);
console.log(carrito);
*/
/*
let item = {nombre:"leche",cantidad:1}
console.log("item:"+item.nombre);
console.log("cantidad:"+item.cantidad);

let carrito = [{nombre:"leche",cantidad:1},
               {nombre:"carne",cantidad:2},
               {nombre:"fideo",cantidad:1},
               {nombre:"papa",cantidad:3}];
console.log(carrito);
//imprimirlo con etiquetas
//adicionar un nuevo registro

console.log("contenido del carrito");
carrito.forEach(item => {
    console.log("item:"+item.nombre);
    console.log("cantidad:"+item.cantidad);
})
//agregar nuevo registro
 
let nuevoitem = {nombre: "jugo",cantidad:5};
carrito.push(nuevoitem);

//imprimir arreglo
console.log("carrito atualizado");
carrito.forEach(item => {
    console.log("item:"+item.nombre);
    console.log("cantidad:"+item.cantidad);
})
*/

//adicionar un nuevo registro
//let item = {nombre:"leche",cantidad:1,precio:7.5};
//imprimir item,cantidad,precio,total

let carrito = [{nombre:"leche",cantidad:1,precio:3},
               {nombre:"carne",cantidad:2,precio:5},
               {nombre:"fideo",cantidad:1,precio:8},
               {nombre:"papa",cantidad:3,precio:10}];
/*console.log("contenido del carrito:");
carrito.forEach(item =>{
    console.log("item:"+item.nombre);
    console.log("cantidad:"+item.cantidad);
    console.log("precio bs:"+item.precio.toFixed(2));
    let total=item.cantidad*item.precio;
    console.log("total:bs."+total.toFixed(2));
    console.log;
})
console.log("carrito:");
//nuevo item
let nuevoitem={nombre:"arroz",cantidad:2,precio: 1.2};
carrito.push(nuevoitem);

console.log("carrito:");
carrito.forEach(item =>{
    console.log("item:"+item.nombre);
    console.log("cantidad:"+item.cantidad);
    console.log("precio bs:"+item.precio.toFixed(2));
    let total=item.cantidad*item.precio;
    console.log("total:bs."+total.toFixed(2));
    console.log;
})


//Buscar funciones o procesos para ordenar un ARRAY.

/*
let numeros = [3,5,8,10]
numeros.sort((a,b)=>a-b);
console.log(numeros);
console.log("IMPRECION ORDENADO POR PRECIO");
carrito.sort((a,b)=>a.precio - b.precio); //ordena alfabeticamente
console.log(carrito);
console.log("IMPRECION ORDENADO POR NOMBRE");
carrito.sort((a,b)=>a.nombre.localeCompare(b.nombre));
console.log(carrito);
*/

console.log("IMPRECION ORDENADO POR PRECIO");
let carritoPrecio = carrito.slice().sort((a,b)=>a.precio - b.precio); //ordena alfabeticamente
console.log(carritoPrecio);

console.log("IMPRECION ORDENADO POR NOMBRE");
let carritoNombre = carrito.slice().sort((a,b)=>a.nombre.localeCompare(b.nombre)); //ordena alfabeticamente
console.log(carritoNombre);


