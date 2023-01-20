/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numSecreto = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //ambito global sin let o const
	

}

function verificar()
{
  let i = 0;
  let a = 0;
  let seguir; 
  let num;
  let flag = 0;
  
  do {
    if (flag == 0){   
      num = parseInt(document.getElementById("txtIdNumero").value);
      if(num === numSecreto){
        alert (`su numero es ${num} y el numero secreto es ${numSecreto} USTED ES EL GANADOR`);
      }
      else{
        alert(`su numero es  ${num} y el numero secreto es ${numSecreto} PERDIÓ`)
      }
      
      a = a + i;
      i++;
      flag = 1;
    }
  num = parseInt(prompt("Ingrese un numero del 1 al 100"));
  
  if(num === numSecreto){
    alert (`su numero es ${num} y el numero secreto es ${numSecreto} USTED ES EL GANADOR`);
  }
  else{
    alert(`su numero es  ${num} y el numero secreto es ${numSecreto} PERDIÓ`)
  }
  
  a = a + i;
  i++;
  
  seguir = prompt("Quieres seguir intentando?");
  }while(seguir == 's');

  if(i == 1){
	alert("Usted es Psiquico");
  }
  else if (i == 2){
	alert("Excelente percepción")
  }
  else if(i == 3){
	alert("Esto es suerte!")
  }
  else if(i == 4){
	alert("Excelente tecnica")
  }
  else if(i ==5){
	alert("usted esta en la media")
  }
  else {
	alert("falta tecnica")
  }

  document.getElementById("txtIdIntentos").value = i;
  document.getElementById("txtIdNumero").value = num;

 
	

}