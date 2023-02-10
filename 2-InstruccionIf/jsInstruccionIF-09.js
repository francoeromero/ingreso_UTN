function mostrar()
{
    //declaro variables
	let numero;
    let maximo;
    let minimo;
    let random;
    //asigno los limites numeros max y min
    maximo = 10;
    minimo = 1;
    //genero un numero random
    random = Math.random() * (maximo - minimo + 1);
    //redondeo a numero entero
    numero = Math.ceil(random);
    //muestro
    alert("Su numero es : " + numero);
}

//otras soluciones:
// Math.floor(Math.random() * (max - min + 1)) + min;
// Math.floor(Math.random(numero) * 10) + 1;
// Math.floor(Math.random() * (max - min) + min);




    // //anido a math.round para redondearlo en un numero entero, y dentro utilizo el math.random para generar un numero del 0 al 1, y lo demas utilizo la formula para saber los limite entre max y min
    // numero = Math.round(Math.random() * (maximo - minimo + 1 ) + minimo);
    // //muestro en una ventana emergente la variable numero
    // alert("Su numero es: " + numero);

















/*
Math.random()  [0 , 1) va  del 0 al 1   valores decimales aleatorios  

Math.round  =   para redondear a numeros enteros  es como parseInt pero la diferencia que parseInt transforma el valor de string a number enteros

hacemos una ecuacion con el math.random utilizando variables con valores numericos y todo dentro del math.round para que redondee el numero en entero


Math.round() redondea al entero más cercano, incluyendo hacia arriba si es necesario. Por otro lado, Math.floor() redondea siempre hacia abajo.

Funciones de JS que se utilizan para generar un num random:

-Math.random() genera un numero del 0 al 1
- Math.round() redondea al entero más cercano, incluyendo hacia arriba si es necesario.
- Math.floor() redondea siempre hacia abajo.
- Math.ceil()  redondea un número flotante hacia arriba al entero más cercano.
*/

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
