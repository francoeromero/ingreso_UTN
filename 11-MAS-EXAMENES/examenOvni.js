/*
2)
Se desea desarrollar un programa que permita al usuario ingresar 

la forma del ovni avistado (circular, triangular, hexagonal), la fecha del avistamiento, 
el lugar donde se observó 
y el horario en que ocurrió el avistamiento, 

para luego realizar las siguientes operaciones:

A - Encontrar la forma de ovni más avistada en el conjunto de datos ingresado.
B - Buscar los avistamientos que se hayan producido en horarios nocturnos (entre las 20:00 y las 06:00).
C - Cual es la primer y ultima ciudad donde se produjo los avistamiento registrado.
D - Porcentaje sobre el total ingresado para cada forma observada.

*/

function comenzar()
{
    let continua;
	let mensaje;
    let formaOvni;
    let fecha;
    let lugar;
    let horario;
    let contadorCircular=0;
    let contadorTriangular=0;
    let contadorHexagonal=0;
    let formaMasVista;
    let contadorVistosHorario=0;
    let primerIngreso=0;
    let lugarPrimerAvistamiento;
    let lugarUltimoAvistamiento;
    let contadorFormaOvnisIngresadas=0;
    let porcentajeCircular;
    let porcentajeHexagonal;
    let porcentajeTriangular;
	
	
	do
	{
        do
        {
            formaOvni = prompt("Ingrese formaOvni (circular, triangular, hexagonal)");
            formaOvni = formaOvni.toLowerCase();
        }while(formaOvni != "circular" && formaOvni != "triangular" && formaOvni != "hexagonal");
        do
        {
            fecha = prompt("Ingrese fecha: dd/mm/yyyy");
            fecha = parseInt(fecha);
        }while(isNaN(fecha) || fecha < 0);
        do
        {
            lugar = prompt("Ingrese lugar donde lo vio");
            lugar = lugar.toLowerCase();
        }while(!isNaN(lugar));
        do
        {
            horario = prompt("Ingrese horario en formato 24hs");
            horario = parseFloat(horario);
        }while(horario < 0 || horario > 24);

        //a
        switch (formaOvni) {
            case "circular":
                contadorCircular++;
            break;
            case "hexagonal":
                contadorHexagonal++;
            break;
            default:
                contadorTriangular++;
            break;
        }
        contadorFormaOvnisIngresadas++;
        //B
        if(horario> 19 || horario < 7)
        {
            contadorVistosHorario++;
        }
        //C

        if(primerIngreso==0)
        {
            lugarPrimerAvistamiento=lugar;
            primerIngreso=1;
        }
        else
        {
            lugarUltimoAvistamiento=lugar;
        }


		continua = confirm("Quieres continuar?");
	}while(continua);
	//****************FIN DE ITERACIÓN************************ */
	if(contadorCircular > contadorHexagonal && contadorCircular > contadorTriangular)
	{
        formaMasVista = "CIRCULAR";
    }else{
        if(contadorHexagonal > contadorTriangular && contadorHexagonal > contadorCircular)
		{
            formaMasVista = "HEXAGONAL";
        }else{
            formaMasVista = "TRIANGULAR";
        }
    }
    //D
    if(contadorCircular!=0)
    {
        porcentajeCircular = (contadorCircular *100)/ contadorFormaOvnisIngresadas;
    }
    else
    {
        porcentajeCircular=0;
    }
    if(contadorHexagonal!=0)
    {
        porcentajeHexagonal=(contadorHexagonal*100)/contadorFormaOvnisIngresadas;
    }
    else
    {
        porcentajeHexagonal=0;
    }
    if(contadorTriangular!=0)
    {
        porcentajeTriangular=(contadorTriangular*100)/contadorFormaOvnisIngresadas;
    }
    else
    {
        porcentajeTriangular=0;
    }
	//muestro
	// mensaje = "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	alert(mensaje);

}