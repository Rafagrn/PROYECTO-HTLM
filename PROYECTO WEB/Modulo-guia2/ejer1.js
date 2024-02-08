//1. Realizar un programa que permita generar 100 números e imprimir solo los 
//números pares.
'use strict'
let miArreglo = [];

for( let i = 0; i < 100; i++){
    miArreglo[i]= i+1;
}
for (let j = 100; j <= 200; j++){
    miArreglo.push[j];
}
console.log(miArreglo);
//filtrar numero pares
let miArrayResultado = miArreglo.filter(element => element % 2 === 0);
console.log(miArrayResultado);