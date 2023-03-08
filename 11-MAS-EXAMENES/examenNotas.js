
/*
/*Se debe ingresar alumnos hasta que el usuario quiera:
Cada alumno cuenta con nota del 

nota primer cuatrimestre (0 a 10) 
nota segundo cuatrimestre (0 a 10)
número de comisión (1000 a 2000)
nombre,
apellido,
materia (programcion, matematica, ingles).

1) Notas promedio primer y segundo cuatrimestre (promedio)
2) Nombre, apellido y comisión del alumno con menor nota primer cuatrimestre (flag)
3) Materia con mayor número de promocionados (se promociona con 6) (if)
*/

function comenzar()
{
    let continua;
	let mensaje;
    let primeraNota;
    let segundaNota;
    let materia;
    let nombreAlumno;
    let numComision;
    let acumuladorPrimerNota=0;
    let acumuladorSegundaNota=0;
    let contadorGeneralAlumnos=0;
    let promedioPrimerCuatrimestre;
    let promedioSegundoCuatrimestre;
    let flagNotas=0;
    let nombreAlumnoMenorPrimerNota;
    let comisionAlumnoMenorPrimerNota;
    let apellidoAlumnoMenorPrimerNota;
    let menorPrimerNota;
    let apellidoAlumno;
    let contadorPromocionMate=0;
    let contadorPromocionIngles=0;
    let contadorPromocionProgramacion=0;
    let materiaConMayorNumeroPromocionados;
	
	
	do
	{
        do
        {
            nombreAlumno = prompt("Ingrese nombre del Alumno");
            nombreAlumno = nombreAlumno.toLowerCase();
        }while(!isNaN(nombreAlumno));
        do
        {
            apellidoAlumno = prompt("Ingrese apellido Alumno");
            apellidoAlumno = apellidoAlumno.toLowerCase();
        }while(!isNaN(apellidoAlumno));
        do
        {
            materia = prompt("Ingrese materia");
            materia = materia.toLowerCase();
        }while(materia != "programacion" && materia != "matematica" && materia != "ingles");
        do
        {
            primeraNota = prompt("Ingrese primeraNota del primer cuatrimestre:");
            primeraNota = parseInt(primeraNota);
        }while(primeraNota < -1 || primeraNota > 11);
        do
        {
            segundaNota = prompt("Ingrese segundaNota del cuatrimestre");
            segundaNota = parseInt(segundaNota);
        }while(segundaNota < -1 || segundaNota > 11);
        
        do
        {
            numComision = prompt("Ingrese numComision");
            numComision = parseInt(numComision);
        }while(numComision < 999 || numComision > 2001);
        //1
        acumuladorPrimerNota+=primeraNota;
        acumuladorSegundaNota+=segundaNota;
        contadorGeneralAlumnos++;   
        //2
        if(flagNotas==0)
        {
            comisionAlumnoMenorPrimerNota=numComision;
            apellidoAlumnoMenorPrimerNota=apellidoAlumno;
            nombreAlumnoMenorPrimerNota=nombreAlumno;
            menorPrimerNota=primeraNota;
            flagNotas=1;
        }
        else
        {
            if(primeraNota < menorPrimerNota)
            {
                comisionAlumnoMenorPrimerNota=numComision;
                apellidoAlumnoMenorPrimerNota=apellidoAlumno;
                nombreAlumnoMenorPrimerNota=nombreAlumno;
            }
        }
        //3
        switch (materia) {
            case "matematica":
                if(primeraNota>5 && segundaNota>5)
                {
                    contadorPromocionMate++;
                }     
            break;
            case "ingles":
                if(primeraNota>5 && segundaNota>5)
                {
                    contadorPromocionIngles++;
                }
            break;
            default:
                if(primeraNota>5 && segundaNota>5)
                {
                    contadorPromocionProgramacion++;
                }
            break;
        }


		continua = confirm("Quieres continuar?");
	}while(continua);
	//****************FIN DE ITERACIÓN************************ */
    if(acumuladorPrimerNota!=0)
    {
        promedioPrimerCuatrimestre = acumuladorPrimerNota / contadorGeneralAlumnos;
    }
    else
    {
        promedioPrimerCuatrimestre=0;
    }
    if(acumuladorSegundaNota!=0)
    {
        promedioSegundoCuatrimestre=acumuladorSegundaNota/contadorGeneralAlumnos;
    }
    else
    {
        promedioSegundoCuatrimestre=0;
    }
    //3
    if(contadorPromocionIngles > contadorPromocionMate && contadorPromocionIngles > contadorPromocionProgramacion)
	{
        materiaConMayorNumeroPromocionados = "INGLES";
    }else{
        if(contadorPromocionMate > contadorPromocionProgramacion && contadorPromocionMate > contadorPromocionIngles)
		{
            materiaConMayorNumeroPromocionados = "MATEMATICA";
        }else{
            materiaConMayorNumeroPromocionados = "PROGRAMACION";
        }
    }
	//muestro
	mensaje = "\n 1 el promedio del primer cuatrimestre de todos los alumnos es: " + promedioPrimerCuatrimestre;
	mensaje += "\n 1 el promedio del segundo cuatrimestre de todos los alumnos es:" + promedioSegundoCuatrimestre;
	mensaje += "\n 2 nombre alumno con menor nota primer cuatrimestre" + nombreAlumnoMenorPrimerNota;
	mensaje += "\n apellido alumno con menor nota primer cuatrimestre" + apellidoAlumnoMenorPrimerNota;
	mensaje += "\n comision alumno con menor nota primer cuatrimestre" + comisionAlumnoMenorPrimerNota;
	mensaje += "\n 3 Materia con mayor número de promocionados" + materiaConMayorNumeroPromocionados;

	alert(mensaje);
}