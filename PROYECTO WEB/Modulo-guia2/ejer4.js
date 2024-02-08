// 4. Leer 12 notas de estudiantes y determinar cuántas aprobó y cuantas reprobó, 
//dado un rango 0 a 10, reprueba cuando la nota está entre 0 y 5.

var num1, num2, num3, num4, num5,num6, num7, num8, num9, num10, total;
num1=parseInt(prompt("Digiteel # 1; "));
num2=parseInt(prompt("Digiteel # 2; "));
num3=parseInt(prompt("Digiteel # 3; "));
num4=parseInt(prompt("Digiteel # 4; "));
num5=parseInt(prompt("Digiteel # 5; "));
num6=parseInt(prompt("Digiteel # 6; "));
num7=parseInt(prompt("Digiteel # 7; "));
num8=parseInt(prompt("Digiteel # 8; "));
num9=parseInt(prompt("Digiteel # 9; "));
num10=parseInt(prompt("Digiteel # 10; "));
//total=( num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8+ num9 + num10);

let miArreglo1=[num1,num2,num3,num4, num5,num6,num7,num8,num9, num10];
//operador deproopagación
let miArrayAprobado = miArreglo1.filter(element => element <5);
//let miarraySumaAprob =miArrayAprobado.suma(element => element <5); 
console.log(miArrayAprobado);
let miArrayReprobado = miArreglo1.filter(element => element >5);

console.log(miArrayAprobado.length);
console.log(miArrayReprobado.length);// length me indica cantidad de caracteres


document.write("Aprobados:#" + miArrayAprobado);// imprime en pantalla

document.write("Reprobados:#" + miArrayReprobado);// imprime en pantalla

document.write("Suma Aprobadoos:#" + miarraySumaAprob);// imprime en pantalla

