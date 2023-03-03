
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
    let acumuladorVotosDos = 0;
    let nombreCandidato;
    let nombreCandidatoUno;
    let continua;
	let mensaje;
    let acumuladorEdades = 0;
    let acumuladorVotos=0;
    let votosEmitidos;
    let acumuladorVotosTres = 0;
    let promedioEdades;
    let acumuladorVotosUno = 0;
    let nombreCandidatoDos;
    let edadCandidato;
    let i;
    let nombreCandidatoCinco;
    let nombreCandidatoTres;
    let nombreCandidatoCuatro;
    let acumuladorVotosCuatro = 0; 
    let acumuladorVotosCinco = 0;



    


	for (i = 0; i < 5; i++) {
        do
        {
            nombreCandidato = prompt("Ingrese nombreCandidato").toLowerCase();
        }while(!isNaN(nombreCandidato));
        do
        {
            edadCandidato = prompt("Ingrese edadCandidato");
            edadCandidato = parseInt(edadCandidato);
        }while(isNaN(edadCandidato) || edadCandidato < 0);

        do
        {
            cantidadVotos = prompt("Ingrese cantidadVotos");
            cantidadVotos = parseInt(cantidadVotos);
        }while(isNaN(cantidadVotos) || cantidadVotos < 0);

        acumuladorEdades+= edadCandidato;
        acumuladorVotos+= cantidadVotos;
        if(i == 1)
        {
            nombreCandidatoUno = nombreCandidato;
            acumuladorVotosUno+= cantidadVotos; 
        }
        else
        {
            if(i == 2)
            {
                nombreCandidatoDos = nombreCandidato;
                acumuladorVotosDos+= cantidadVotos; 
            }
            else
            {
                if(i == 3)
                {
                    nombreCandidatoTres = nombreCandidato;
                    acumuladorVotosTres+= cantidadVotos; 
                }
                else
                {
                    if(i == 4)
                    {
                        nombreCandidatoCuatro = nombreCandidato;
                        acumuladorVotosCuatro+= cantidadVotos; 
                    }
                    else
                    {
                        nombreCandidatoCinco = nombreCandidato;
                        acumuladorVotosCinco+= cantidadVotos; 
                    }
                }
            }
        }
	}
    //muestro
    // a-el promedio de edades de los candidatos   
    //promedio acumulador / contador
    promedioEdades = acumuladorEdades / i;
    votosEmitidos = acumuladorVotos;
    //c
     //para saber cuanto es el porcentaje que acumulo
    // acumuladorvotos (kg)_______100%
    // acumuladorvotos(kg)_________x%(porcentajeAcumulado)
    let votosCandidatoUno;
    let votosCandidatoDos;
    let votosCandidatoTres;
    let votosCandidatoCuatro;
    let votosCandidatoCinco;
    votosCandidatoUno = acumuladorVotosUno * 100 / votosEmitidos;
    votosCandidatoDos = acumuladorVotosDos * 100 / votosEmitidos;
    votosCandidatoTres = acumuladorVotosTres * 100 / votosEmitidos;
    votosCandidatoCuatro = acumuladorVotosCuatro * 100 / votosEmitidos;
    votosCandidatoCinco = acumuladorVotosCinco * 100 / votosEmitidos;


	mensaje = "\n a-el promedio de edades de los candidatos " + promedioEdades;
	mensaje += "\n b-total de votos emitidos." + votosEmitidos;
	mensaje += "\n c - porcentaje de votos de : " + nombreCandidatoUno + " es " + votosCandidatoUno + "%";
	mensaje += "\n c - porcentaje de votos candidato 2:  "+ nombreCandidatoDos + " es "  + votosCandidatoDos + "%";
	mensaje += "\n c - porcentaje de votos candidato 3: "+ nombreCandidatoTres + " es "  + votosCandidatoTres + "%";
	mensaje += "\n c - porcentaje de votos candidato 4: "+ nombreCandidatoCuatro + " es "  + votosCandidatoCuatro + "%";
	mensaje += "\n c - porcentaje de votos candidato 5: "+ nombreCandidatoCinco + " es "  + votosCandidatoCinco + "%";

	alert(mensaje);
    
}