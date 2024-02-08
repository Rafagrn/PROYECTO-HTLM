// 2.Realizar un programa que permita sumar los 150 primeros números.
'use strict'
let miArreglo = [];
let acumulador= 0;
for( let i = 0; i < 150; i++){
    miArreglo[i]= i+1;
    acumulador = acumulador + i;
    console.log("Numero No:"+ i);
   
    }
    console.log("total:"+ acumulador);