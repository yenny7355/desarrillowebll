/*Realizar las siguientes convesiones implicitas
let var1=15.25;
let var2=0;
let var3=true;
let var4="100";
let varx;
*/
console.log("Lista de implicitas");
let var1 = 15.25; // Tipo de dato: número de punto flotante
let var2 = 0;     // Tipo de dato: número entero
let var3 = true;  // Tipo de dato: booleano
let var4 = "100"; // Tipo de dato: cadena de caracteres (string)
let varx;         // Tipo de dato: indefinido

varx=var1;
varx=var2
console.log("Para la variable var1="+varx+"con el tipo de dato="+typeof varx);
varx=var3
console.log("Para la variable var1="+varx+"con el tipo de dato="+typeof varx);
varx=var4
console.log("Para la variable var1="+varx+"con el tipo de dato="+typeof varx);




//conversiones explicitas

varx=var1+var2;//dentro de implicita
console.log("Para la variable var1="+varx+"con el tipo de dato="+typeof varx);
varx=var2+var3;//analizarlo
console.log("Para la variable var1="+varx+"con el tipo de dato="+typeof varx);
varx=var1+Number(var4)//buscar una funcion
console.log("Para la variable var1="+varx+"con el tipo de dato="+typeof varx);


