/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

//declaro una variable global porque la voy a usar en las dos funciones
let numSecreto = 0;
function comenzar() 
{
  //declaro las variables
  let max;
  let min;
  let random;
  //asigno el max y minimo
  max = 100;
  min = 1;
  //calculo el numero aleatorio
  random = Math.random() * (max - min + 1);
  numSecreto = Math.floor(random) + 1;
}
function verificar()
{
  let numIngresado;
  let mensaje;
  let intentos = 0; 
  numIngresado = document.getElementById("txtIdNumero").value;
  while(numIngresado != numSecreto)
  {
      numIngresado = prompt("Perdiste, ingresa otro numero del 1 al 100: " + numSecreto);
      numIngresado = parseInt(numIngresado);
      intentos = intentos + 1;
  }
  mensaje = "GANASTE!";
  alert(mensaje);
  document.getElementById("txtIdIntentos").value = intentos;
  document.getElementById("txtIdNumero").value = numSecreto;
}



























  // let numIngresado;
  // let mensaje;
  // numIngresado = document.getElementById("txtIdNumero").value;
  // numIngresado = parseInt(numIngresado);
  // if(numIngresado === numSecreto)
  // {
  //   mensaje = "GANASTE!";
  // }
  // else
  // {
  //   mensaje = "perdiste";
  // }
  // alert("El numero secreto es: "+ numSecreto + " " + mensaje);
  // // document.getElementById("txtIdNumero").value = ;
  // // document.getElementById("txtIdIntentos").value = ;

// const comenzar = () =>{

//   numSecreto = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //ambito global sin let o const  
// }

// const verificar = () =>{
//   let i = 0;
//   let a = 0;
//   let seguir; 
//   let num;
//   let flag = 0;
  
//   do {
//     if (flag == 0){   
//       num = parseInt(document.getElementById("txtIdNumero").value);
//       if(num === numSecreto){
//         alert (`su numero es ${num} y el numero secreto es ${numSecreto} USTED ES EL GANADOR`);
//       }
//       else{
//         alert(`su numero es  ${num} y el numero secreto es ${numSecreto} PERDIÓ`)
//       }
      
//       a = a + i;
//       i++;
//       flag = 1;
//     }
//   num = parseInt(prompt("Ingrese un numero del 1 al 100"));
  
//   if(num === numSecreto){
//     alert (`su numero es ${num} y el numero secreto es ${numSecreto} USTED ES EL GANADOR`);
//   }
//   else{
//     alert(`su numero es  ${num} y el numero secreto es ${numSecreto} PERDIÓ`)
//   }
  
//   a = a + i;
//   i++;
  
//   seguir = prompt("Quieres seguir intentando?");
//   }while(seguir == 's');

//   document.getElementById("txtIdIntentos").value = i;
//   document.getElementById("txtIdNumero").value = num;

 

// }

/*
__________________________________
FORMULA PARA GENERAR UN RANGO DE NUMEROS ESPECIFICOS RANDOMS

max y min son los limites del rango de numero por ejemplo entre 3 y 9 

Math.floor(Math.random() * (max - min + 1)) + min;
____________________________________
OTRA FORMULA 
max es el numero limite, por ejemplo quiero que me de numeros randoms hasta el 20, entonces (20-1) = 19, estaria multiplicando por 19 

Math.floor(Math.random() * (max-1));
____________________________________
Math.floor() se utiliza para redondear hacia abajo un número decimal a su entero más cercano, mientras que Math.random() se utiliza para generar un número aleatorio decimal entre 0 y 1.

*/

