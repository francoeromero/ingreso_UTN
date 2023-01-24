/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
   num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
   num2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
   operacion = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

    document.getElementById("txtIdPrimerNumero").value = num1;
    document.getElementById("txtIdSegundoNumero").value = num2;

	
    if (operacion == 1){
        operacion = "+";
        document.getElementById("txtIdOperador").value = operacion; 
       }
       else if (operacion ==2){
        operacion = "-";
        document.getElementById("txtIdOperador").value = operacion; 
       }
       else if (operacion == 3){
        operacion = "*";
        document.getElementById("txtIdOperador").value = operacion; 
       }
       else if(operacion ==4) {
        operacion = "/";
        document.getElementById("txtIdOperador").value = operacion; 
       }
       else{
        operacion = "error";
       }
}
function Responder()
{
    

}
