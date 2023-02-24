/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	//1- crear espacios de memoria para guardar datos que escribira el usuario
    //2- pedir los datos y asignarlo en sus respectivas variables para ir ordenando
    //3- mostrar los datos en los elementos de html que son los inputs o entradas

    //creamos las variables
    let preguntar;
    let edad;

    do
    {
        edad = prompt("Ingrese edad: ");
        edad = parseInt(edad);
        while(edad < 18 || edad > 91)
        {
            edad = prompt("Error: ingrese de nuevo su edad: ");
            edad = parseInt(edad);
        }
        preguntar = confirm("Quieres agregar a otra persona mas?");
    }while(preguntar);

























    /*
    let edad;
    let sexo;
    let estadoCivil;
    let mensaje;
    let respuesta;

    respuesta="y";
   

    while(respuesta=="y")
    {

        edad=prompt("ingrese edad: ");
        edad = parseInt(edad);
        while(edad<18&&edad>91)
        {
            edad = prompt("Error ingrese de nuevo");
            edad=parseInt(edad);
        }
        
        respuesta = prompt("quiere ingresar otro cliente y/n:");
    }    
*/


    /*
    do
    {
        edad = prompt("Ingrese edad: ");  
        edad = parseInt(edad);
    } while(isNaN(edad) == true || edad < 18 || edad > 90);


    do
    {
        sexo = prompt("Ingrese su genero m,masculino o f femenino : ");
    }while(sexo != "m" && sexo != "f");
    do
    {
        
    }while(estadoCivil != 1 && estadoCivil != 2 && estadoCivil != 3 && estadoCivil != 4);

    // mensaje = "Edad validada!";
    // alert(mensaje);
    document.getElementById("txtIdEdad").value = edad;
    document.getElementById("txtIdSexo").value = sexo;
*/
}



// if(edad > 18 && edad < 90)
    // {
    //     mensaje = "Edad validada"; 
    // }
    // else
    // {
    //     mensaje = "Edad No validada";
    // }