/*
Romero Montero Franco Ezequiel
fecha: 8/03/2023
division K 
turno Noche
dni 40143483
Ej 2


En una veterinaria se están realizando censos para evaluar los animales ingresados por día. Por este motivo, se le realizará una consulta al menos 6 clientes.

Se requieren los siguientes datos:
Tamaño de la mascota (Chica, Mediana o Grande).
Sexo de la mascota (Hembra o Macho).
Tipo de mascota (Gato, Perro, Otro).
Edad de la mascota. Validar.
Está vacunado? SI/NO (Se puede utilizar boolean si se desea).
INFORMAR


A- Cuál es el tipo, el sexo y la edad de la mascota más joven entre los tamaños medianos o grandes.
B- Cuál es el promedio de edad de los PERROS.
C- Cuál es el tipo de mascota más vacunado.

*/
function comenzar()
{
    


	let i;
	let mensaje;
    let tamañoMascota;
    let sexoMascota;
    let tipoMascota;
    let edadMascota;
    let vacunado;
    let flag=0;
    let minEdad;
    let sexoMascotaMasJoven;
    let tipoMascotaMasJoven;
    let acumuladorEdadPerros=0;
    let contadorEdadPerros=0;
    let promedioEdadPerros;
    let contadorGatosVacunados=0;
    let contadorOtrosVacunados=0;
    let contadorPerrosVacunados=0;
    let tipoMascotaMasVacunados;
    


	for (i = 0; i < 6; i++) {

        
	do
	{
		tamañoMascota = prompt("Ingrese tamañoMascota chica mediana o grande");
		tamañoMascota = tamañoMascota.toLowerCase();
	}while(tamañoMascota != "chica" && tamañoMascota != "mediana" && tamañoMascota != "grande");

	do
	{
		sexoMascota = prompt("Ingrese sexoMascota hembra o macho");
		sexoMascota = sexoMascota.toLowerCase();
	}while(sexoMascota != "hembra" && sexoMascota != "macho");
	do
	{
		tipoMascota = prompt("Ingrese tipoMascota gato perro o otro");
		tipoMascota = tipoMascota.toLowerCase();
	}while(tipoMascota != "gato" && tipoMascota != "perro" && tipoMascota != "otro");
	do
	{
		edadMascota = prompt("Ingrese edadMascota");
		edadMascota = parseInt(edadMascota);
	}while(isNaN(edadMascota) || edadMascota < 0);

	do
	{
		vacunado = prompt("Ingrese vacunado si o no");
		vacunado = vacunado.toLowerCase();
	}while(vacunado != "si" && vacunado != "no");

    //A
    if(tamañoMascota=="mediana" || tamañoMascota=="grande")
    {
        if(i==1)
        {
            //a
            tipoMascotaMasJoven=tipoMascota;
            sexoMascotaMasJoven=sexoMascota;
            minEdad=edadMascota;
        }
        else
        {
            if(edadMascota<minEdad)
            {
                tipoMascotaMasJoven=tipoMascota;
                sexoMascotaMasJoven=sexoMascota;
                minEdad=edadMascota;
            }
        }
    }
    //B
    if(tipoMascota=="perro")
    {
        acumuladorEdadPerros+=edadMascota;
        contadorEdadPerros++;
    }
    //C
    if(vacunado=="si")
    {
        switch (tipoMascota) {
            case "perro":
                contadorPerrosVacunados++;
            break;
            case "gato":
                contadorGatosVacunados++;
            break;
            default:
                contadorOtrosVacunados++;
            break;
        }
    }
	}
	//****************FIN DE ITERACIÓN************************ */
    //B
    if(contadorEdadPerros!=0)
    {
        promedioEdadPerros= acumuladorEdadPerros/contadorEdadPerros;
    }
    else
    {
        promedioEdadPerros=0;
    }
    //C
	if(contadorGatosVacunados > contadorPerrosVacunados && contadorGatosVacunados > contadorOtrosVacunados)
	{
        tipoMascotaMasVacunados = "GATOS";
    }else{
        if(contadorPerrosVacunados > contadorOtrosVacunados && contadorPerrosVacunados > contadorGatosVacunados)
		{
            tipoMascotaMasVacunados = "PERROS";
        }else{
            tipoMascotaMasVacunados = "OTROS";
        }
    }

	//muestro
	mensaje = "\n A- tipo de mascota mas joven es " + tipoMascotaMasJoven;
	mensaje += "\n A- edad de la mascota mas joven es " + minEdad;
	mensaje += "\n A- sexo de la mascota mas joven es " + sexoMascotaMasJoven;
	mensaje += "\n B- el promedio de edad de los perros es " + promedioEdadPerros;
	mensaje += "\n C- tipo de mascotas mas vacunados es " + tipoMascotaMasVacunados;
	
	alert(mensaje);



}