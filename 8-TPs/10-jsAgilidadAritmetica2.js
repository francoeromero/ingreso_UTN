/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
let respuesta;
let temporizador;
function comenzar()
{
    num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    num2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    operacion = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
 
     document.getElementById("txtIdPrimerNumero").value = num1;
     document.getElementById("txtIDSegundoNumero").value = num2;
 
     
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
