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

let numSecreto;
function comenzar()
{
  let max = 100;
  let min = 1;
  numSecreto = Math.random() * (max - min + 1);
  numSecreto = Math.floor(numSecreto) + 1;
}

function verificar()
{
  let numIngresado;
  let mensaje;
  let intentos = 0;
  numIngresado = document.getElementById("txtIdNumero").value;
  numIngresado = parseInt(numIngresado);
  while(numIngresado != numSecreto)
  {
    numIngresado = prompt("Perdiste, vuelve a ingresar del 1 al 100: " + numSecreto);
    numIngresado = parseInt(numIngresado);
    intentos = intentos + 1;
  }
  
  if(intentos == 1)
  {
    mensaje = "Usted es un psiquico";
  }
  else
  {
    if(intentos == 2)
    {
      mensaje = "excelente percepción";
    }
    else
    {
      if(intentos == 3)
      {
        mensaje =  "Esto es suerte";
      }
      else
      {
        if(intentos == 4)
        {
          mensaje = "Excelente técnica";
        }
        else
        {
          if(intentos == 5)
          {
            mensaje = "Usted está en la media";
          }
          else
          {
            if(intentos > 6  && intentos < 10)
            {
              mensaje = "falta técnica";
            }
            else
            {
              if(intentos > 10)
              {
                mensaje = "Afortunado en el amor!!";
              }
            }
          }
        }
      }
    }
  }
  alert("GANASTE!! " + mensaje);
  document.getElementById("txtIdNumero").value = numSecreto;
  document.getElementById("txtIdIntentos").value = intentos;
}




















/*

//Genero el número RANDOM entre 1 y 100
	numSecreto = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //ambito global sin let o const
	





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




*/