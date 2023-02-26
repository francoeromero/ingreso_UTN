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
let medialunasTopeSemanal = "";
let acumuladorHarina = 0;
let acumuladorAzucar = 0;
let acumuladorManteca = 0;
while(preguntar)
{
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
    if(cantidadAzucar > 0)
    {
        contadorAzucar++;
    }
    else
    {
        contadorManteca++;
        contadorHarina++;
    }
    acumuladorManteca += cantidadManteca;
    acumuladorHarina += cantidadHarina;
    acumuladorAzucar += cantidadAzucar;
    contadorIngresados++;
    //b) El dia que mas manteca se gastó (por ejemplo el dia 3 se gasto mas manteca)
    contadorDias++;
    if(flagManteca == 0 || cantidadManteca > precioMantecaMaximo )
    {
        precioMantecaMaximo = cantidadManteca;
        diaMantecaMaximo = contadorDias;
        flagManteca == 1;
    }
    preguntar = confirm("Quiere agregar otra persona ? y/n");
}
//a
promedioHarina = contadorHarina / contadorIngresados;
promedioAzucar = contadorAzucar / contadorIngresados;
promedioManteca = contadorManteca / contadorIngresados;
//c- 100 kg de harina, 10 kg de azucar y 20 kg de manteca, informar si los insumos 
if(acumuladorHarina > 100 && acumuladorAzucar > 10 && acumuladorManteca > 20)
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