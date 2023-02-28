/*
/*Se debe ingresar alumnos hasta que el usuario quiera:
Cada alumno cuenta con nota del primer y segundo cuatrimestre (0 a 10)
número de comisión (1000 a 2000)
nombre, apellido, materia (programcuatrimestreion, matematica, ingles).

1) Notas promedio primer y segundo cuatrimestre (promedio)
2) Nombre, apellido y comisión del alumno con menor nota primer cuatrimestre (flag)
3) Materia con mayor número de promocionados (se promociona con 6) (if)
*/
/*
datos: 
nota del primer y segundo cuatrimestre (0 a 10)

validcuatrimestreion: 
cuatrimestre (0 al 10)
num de comision 1000 a 2000
nombre
apellido
materia(programcuatrimestreion matematica ingles)

calculo:
a)
promedio = suma de las 2 notas / contador i 
b)
primera cuatrimestre : la minima nota 
el nombre, apellido y comision
c) 
nota > 5

*/

/*
1) Notas promedio primer y segundo cuatrimestre
2) Nombre, apellido y comisión del alumno con menor nota primer cuatrimestre
3) Materia con mayor número de promocionados (se promociona con 6)
*/

    var continua;
	var mensaje;
	var cuatrimestre;
	var numComision;
	var nombreAlumno;
	var apellidoAlumno;
	var materia;
    var primeraNota;
    var segundaNota;
	var sumaNotas;
	var promedioNota;
	var flagNota = 0;
	var minNota;
	var nombreMinNota;
	var apellidoMinNota;
	var comisionMinNota;
	var materiaMayorPromocionados;
	var contadorInglesPromocionados = 0;
	var contadorProgramacionPromocionados = 0;
	var contadorMatematicaPromocionados = 0;
    var promocionNota;
	do
	{
        do
		{
            cuatrimestre = prompt("Ingrese el cuatrimestre: primero o segundo").toLowerCase();
		}while(cuatrimestre != "primero" && cuatrimestre != "segundo");
        do
        {
            numComision = prompt("Ingrese el numero de comision del 1000 al 2000");
            numComision = parseInt(numComision);
        }while(isNaN(numComision) && (numComision < 999 || numComision > 1999));
		do
		{
			nombreAlumno = prompt("Ingrese el nombre del alumno").toLowerCase();
		}while(!isNaN(nombreAlumno));
		do
		{
			apellidoAlumno = prompt("Ingrese el apellido").toLowerCase();
		}while(!isNaN(apellidoAlumno));
        do
		{
			materia = prompt("Ingrese la materia: programacion matematica ingles").toLowerCase();
		}while(materia != "programacion" && materia != "matematica" && materia != "ingles");
        do
		{
			primeraNota = prompt("Ingrese la primera nota del cuatrimestre: del 0 al 10");
			primeraNota = parseFloat(primeraNota);
		}while(isNaN(primeraNota) && (primeraNota < -1 || primeraNota > 11));
        do
		{
			segundaNota = prompt("Ingrese la segunda nota del cuatrimestre: del 0 al 10");
			segundaNota = parseFloat(segundaNota);
		}while(isNaN(segundaNota) && (segundaNota < -1 || segundaNota > 11));
		
        //1
        
        //2
        if(flagNota == 0)
        {
            minNota = primeraNota;
            flagNota = 1;
        }
        else
        {
            if(primeraNota< minNota)
            {
                minNota = primeraNota;
                nombreMinNota = nombreAlumno;
                apellidoMinNota = apellidoAlumno;
                comisionMinNota = numComision;
            }
        }
        //3
        promedioNota = primeraNota + segundaNota / 2;
        if(materia == "ingles")
        {
            if(promedioNota > 5)
            {
                contadorInglesPromocionados++;
            }
        }
        else
        {
            if(materia == "programacion")
            {
                if(promedioNota > 5)
                {
                    contadorProgramacionPromocionados++;
                }

            }
            else //matematica
            {
                if(promedioNota > 5)
                {
                    contadorMatematicaPromocionados++;
                }
            }
        }
		continua = confirm("Quieres continuar?");
	}while(continua);
	//calculo
    //1
    promedioNota = primeraNota + segundaNota / 2;
    //3
    if(contadorInglesPromocionados > contadorMatematicaPromocionados && contadorInglesPromocionados > contadorProgramacionPromocionados)
    {
        materiaMayorPromocionados = "Ingles";
    }
    else
    {
        if(contadorMatematicaPromocionados > contadorProgramacionPromocionados && contadorMatematicaPromocionados > contadorInglesPromocionados)
        {
            materiaMayorPromocionados = "Matematica";
        }
        else
        {
            materiaMayorPromocionados = "Programacion";
        }
    }
	//muestro
	mensaje = "\n El promedio de la nota del primer y segundo cuatrimestre es de " + promedioNota;
	mensaje += "\n La nota mas baja del primer cuatrimestre es de " + minNota;
	mensaje += "\n El nombre y apellido de la nota mas baja es: " + nombreMinNota + " " + apellidoMinNota;
	mensaje += "\n El numero de comision del alumno con las nota mas baja" + comisionMinNota;
	mensaje += "\n La materia con mayor promocionados es :" + materiaMayorPromocionados;
	alert(mensaje);




