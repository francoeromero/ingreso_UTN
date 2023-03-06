
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


function comenzar ()
{
    let LIMITE_AZUCAR = 10;
    let LIMITE_MANTECA = 20;
    let LIMITE_HARINA = 100;
    let i;
	let mensaje;
    let cantidadManteca;
    let cantidadAzucar;
    let cantidadHarina;
    let acumuladorAzucar=0;
    let acumuladorHarina=0;
    let acumuladorManteca=0;
    let promedioAzucar;
    let promedioManteca;
    let promedioHarina;
    let flagGasto = 0;
    let maxGastoManteca;
    let maxGastoHarina;
    let diaMaximoGastoHarina;
    let diaMaximoGastoManteca;
    
	for (i = 0; i < 7; i++) {
        do
        {
            cantidadManteca = prompt("Ingrese cantidadManteca");
            cantidadManteca = parseFloat(cantidadManteca);
        }while(isNaN(cantidadManteca) || cantidadManteca < 0);
        do
        {
            cantidadAzucar = prompt("Ingrese cantidadAzucar");
            cantidadAzucar = parseFloat(cantidadAzucar);
        }while(isNaN(cantidadAzucar) || cantidadAzucar < 0);
        do
        {
            cantidadHarina = prompt("Ingrese cantidadHarina");
            cantidadHarina = parseFloat(cantidadHarina);
        }while(isNaN(cantidadHarina) || cantidadHarina < 0);
        
        //C
        if((acumuladorAzucar + cantidadAzucar)> LIMITE_AZUCAR)
        {
            alert("Los insumos de AZUCAR alcanzó el limite semanal");
        }
        else
        {
             //A
            acumuladorAzucar += cantidadAzucar;
        }
        if((acumuladorHarina+cantidadHarina)>LIMITE_HARINA)
        {
            alert("Los insumos de HARINA alcanzó el limite semanal");
        }
        else
        {
             //A
            acumuladorHarina+=cantidadHarina;
        }
        if((acumuladorManteca+cantidadManteca)>LIMITE_MANTECA)
        {
            alert("Los insumos de MANTECA alcanzó el limite semanal");

        }
        else
        {
             //A
            acumuladorManteca+=cantidadManteca;
        }
        //B
        if(flagGasto==0)
        {
            maxGastoManteca = cantidadManteca;
            diaMaximoGastoManteca = i;
            maxGastoHarina = cantidadHarina;
            diaMaximoGastoHarina = i;
            flagGasto=1;
        }
        else
        {
            if(cantidadHarina > maxGastoHarina)
            {
                diaMaximoGastoHarina = i;
            }
            if(cantidadManteca > maxGastoManteca)
            {
                diaMaximoGastoManteca = i;
            }
        }
	
	}
	//****************FIN DE ITERACIÓN************************ */
    //A
    if(acumuladorAzucar !=0)
    {
        promedioAzucar = acumuladorAzucar / i;
    }
    else
    {
        promedioAzucar = 0;
    }
    if(acumuladorHarina != 0)
    {
        promedioHarina = acumuladorHarina / i;
    }
    else
    {
        promedioHarina=0;
    }
    if(acumuladorManteca !=0)
    {
        promedioManteca = acumuladorManteca / i;
    }
    else
    {
        promedioManteca=0;
    }
    //B
    
    
	//muestro
	mensaje = "\n a) Promedio de azucar" + promedioAzucar;
	mensaje += "\n a) Promedio de Manteca " + promedioManteca;
	mensaje += "\n a) Promedio de Harina" + promedioHarina;
	mensaje += "\n b) el dia " + diaMaximoGastoHarina +  " " + " se gasto mas harina";
	mensaje += "\n b) el dia " + diaMaximoGastoManteca +  " " + " se gasto mas manteca";
	
	alert(mensaje);

}