/*
"Las medialunas del tio Ger"
La empresa nos encarga una app para poder registrar el gasto de materias primas para la elaboracion 
de sus medialunas de manteca. Para ello se ingresa dia a dia, durante una semana los siguientes datos 
expresados en Kg (validar):
*Cantidad de manteca
*Cantidad de harina
Cantidad de azucar
Se necesita saber:
a) Promedio de azucar, manteca y harina que se usó en la semana. 
b) El dia que mas manteca se gastó (por ejemplo el dia 3 se gasto mas manteca)
c) Se sabe que para producir 2400 medialunas semanales se necesitan 100 kg de harina, 10 kg de azucar y 
20 kg de manteca, informar si los insumos alcanzaron para dicha produccion.
*/

function comenzar()
{
let mensaje;
let preguntar = "y";
let cantidadManteca;
let cantidadHarina;
let cantidadAzucar;
//a
let contadorAzucar = 0;
let contadorHarina = 0;
let contadorManteca = 0;
let contadorIngresados = 0;
let contadorDias = 0;
let promedioAzucar;
let promedioHarina;
let promedioManteca;
//b
let diaMantecaMaximo;
let precioMantecaMaximo;
let flagManteca = 0;
//c
let medialunasTopeSemanal;
let acumuladorHarina = 0;
let acumuladorAzucar = 0;
let acumuladorManteca = 0;
let contador;
contador = 0;
while(contador < 8)
{
    contador++;
    cantidadManteca = prompt("Ingrese la cantidad de MANTECA en KG:");
    cantidadManteca = parseFloat(cantidadManteca);
    while(isNaN(cantidadManteca) == true)
    {
        cantidadManteca = prompt("ERROR: ingrese el numero");
    }
    cantidadHarina = prompt("Ingrese la cantidad de HARINA en KG:");
    cantidadHarina = parseFloat(cantidadHarina);
    while(isNaN(cantidadHarina) == true)
    {
        cantidadHarina = prompt("ERROR: ingrese solo el numero");
        cantidadHarina = parseFloat(cantidadHarina);
    }
    cantidadAzucar = prompt("Ingrese la cantidad de AZUCAR en KG: ");
    cantidadAzucar = parseFloat(cantidadAzucar);
    while(isNaN(cantidadAzucar)== true)
    {
        cantidadAzucar = prompt("ERROR:  solo el numero");
        cantidadAzucar = parseFloat(cantidadAzucar);
    }
    //a) Promedio de azucar, manteca y harina que se usó en la semana.
  
    acumuladorManteca += cantidadManteca;
    acumuladorHarina += cantidadHarina;
    acumuladorAzucar += cantidadAzucar;
    //b) El dia que mas manteca se gastó (por ejemplo el dia 3 se gasto mas manteca)
    
    if(flagManteca == 0 || cantidadManteca > precioMantecaMaximo )
    {
        precioMantecaMaximo = cantidadManteca;
        diaMantecaMaximo = contador;
        flagManteca = 1;
    }
}
//a
promedioHarina = contadorHarina / contador;
promedioManteca = contadorManteca / contador;
//b

if(acumuladorAzucar > 0)
{
    promedioAzucar = contadorAzucar / contador;
    mensaje = "el promedio de azucar es" + promedioAzucar;
}
else
{
    mensaje ="no ingresaron azucar";
}
if(acumuladorManteca > 0)
{
    promedioAzucar = contadorManteca / contador;
    mensaje = "el promedio de Manteca es" + promedioManteca;
}
else
{
    mensaje ="no ingresaron Manteca";
}
if(acumuladorHarina > 0)
{
    promedioAzucar = contadorHarina / contador;
    mensaje = "el promedio de harina es" + promedioHarina;
}
else
{
    mensaje ="no ingresaron harina";
}
//c- 100 kg de harina, 10 kg de azucar y 20 kg de manteca, informar si los insumos 
if(acumuladorHarina > 99 && acumuladorAzucar > 9 && acumuladorManteca > 19)
{
    medialunasTopeSemanal = "\n Los insumos alcanzó para la semana";
}
else
{
    medialunasTopeSemanal = "\n Los insumos todavia no alcanzaron para completar la semana";
}
mensaje =  medialunasTopeSemanal;
mensaje += "\n El promedio de HARINA es: " + promedioHarina;
mensaje += "\n El promedio de AZUCAR es: " + promedioAzucar;
mensaje += "\n El promedio de MANTECA es: " + promedioManteca;
mensaje += "\n El dia que se gastó mas MANTECA fue el dia : " + diaMantecaMaximo ;
alert(mensaje);
}