
/*
2) Se nos pide armar una aplicación para las elecciones, 
para eso necesitamos ingresar 
el nombre de los 5 candidatos a presidente de la nación, 
la edad de cada uno (mayor a 35 años de edad) 
y la cantidad de votos (número positivo 0 incluido)  que sacó en las elecciones.
Necesitamos saber:
a-el promedio de edades de los candidatos
b-total de votos emitidos.
c-el porcentaje de los votos de los 5 candidatos
*/


function comenzar ()
{
    
    let i;
	let mensaje;
    let nombreCandidato;
    let edadCandidato;
    let acumuladorEdades=0;
    let promedioEdades;
    let acumuladorVotosEmitidos=0;
    let acumuladorCandidato1;
    let acumuladorCandidato2;
    let acumuladorCandidato3;
    let acumuladorCandidato4;
    let acumuladorCandidato5;
    let porcentajeCandidato1;
    let porcentajeCandidato2;
    let porcentajeCandidato3;
    let porcentajeCandidato4;
    let porcentajeCandidato5;
    
    
	for (i = 0; i < 5; i++) {
	do
	{
		nombreCandidato = prompt("Ingrese nombreCandidato");
		nombreCandidato = nombreCandidato.toLowerCase();
	}while(!isNaN(nombreCandidato));
	do
	{
		edadCandidato = prompt("Ingrese edadCandidato");
		edadCandidato = parseInt(edadCandidato);
	}while(isNaN(edadCandidato) || edadCandidato < 0 || edadCandidato > 34);
    let cantidadVotos;
	do
	{
		cantidadVotos = prompt("Ingrese cantidadVotos");
		cantidadVotos = parseInt(cantidadVotos);
	}while(isNaN(cantidadVotos) || cantidadVotos < -1);
    //a
    acumuladorEdades+=edadCandidato;
    //b
    acumuladorVotosEmitidos+=cantidadVotos;
    //c
   switch (i) {
    case 1:
        acumuladorCandidato1+=cantidadVotos;
    break;
    case 2:
        acumuladorCandidato2+=cantidadVotos;
    break;
    case 3:
        acumuladorCandidato3+=cantidadVotos;
    break;
    case 4:
        acumuladorCandidato4+=cantidadVotos;
    break;
    default:
        acumuladorCandidato5+=cantidadVotos;
    break;
   }
    
	}
	//****************FIN DE ITERACIÓN************************ */
    //a
    promedioEdades=acumuladorEdades/i;
    //c
    //acumuladorVotosEmitidos __100%
    //acumuladorCandidato_______x%
    if(acumuladorCandidato1!=0)
    {
        porcentajeCandidato1=(acumuladorCandidato1*100)/acumuladorVotosEmitidos;
    }
    else
    {
        porcentajeCandidato1=0;
    }
    if(acumuladorCandidato2!=0)
    {
        porcentajeCandidato2=(acumuladorCandidato2*100)/acumuladorVotosEmitidos;
    }
    else
    {
        porcentajeCandidato2=0;
    }
    if(acumuladorCandidato3!=0)
    {
        porcentajeCandidato3=(acumuladorCandidato3*100)/acumuladorVotosEmitidos;
    }
    else
    {
        porcentajeCandidato3=0;
    }
    if(acumuladorCandidato4!=0)
    {
        porcentajeCandidato4=(acumuladorCandidato4*100)/acumuladorVotosEmitidos;
    }
    else
    {
        porcentajeCandidato4=0;
    }
    if(acumuladorCandidato5!=0)
    {
        porcentajeCandidato5=(acumuladorCandidato5*100)/acumuladorVotosEmitidos;
    }
    else
    {
        porcentajeCandidato5=0;
    }
    
    

	//muestro
	mensaje = "\n a- " + promedioEdades;
	mensaje += "\n b- " + acumuladorVotosEmitidos;
	mensaje += "\n c- porcentaje de candidato 1 es: " + porcentajeCandidato1;
	mensaje += "\n c- porcentaje de candidato 2 es: " + porcentajeCandidato2;
	mensaje += "\n c- porcentaje de candidato 3 es: " + porcentajeCandidato3;
	mensaje += "\n c- porcentaje de candidato 4 es: " + porcentajeCandidato4;
	mensaje += "\n c- porcentaje de candidato 5 es: " + porcentajeCandidato5;
	
	alert(mensaje);

}