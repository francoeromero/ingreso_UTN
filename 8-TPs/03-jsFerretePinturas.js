/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").

B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() 
{
    //pido espacio de memoria para dos valores f y c
    let Fahrenheit;
    let centigrados;

    //paso a valor numerico flotante porque se trabaja en decimales
    Fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    //hago el calculo del valor x con el dato que me da el usuario, en este caso seria fahrenheit
    centigrados = (Fahrenheit - 32) * 5 / 9;    // (Fahrenheit -32)
    
    //muestro el resultado redondeando con 2 decimales
    alert(centigrados.toFixed(2) + " °C");

    //limpio la entrada para una nueva operacion
    document.getElementById("txtIdTemperatura").value = "";

}

function CentigradosFahrenheit() 
{

      //resevo espacio
      let Fahrenheit;
      let centigrados;
      
      //paso a valor flotante
      centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);
  
      //calculo de f a c, utilizando el dato que el usuario escribe
      Fahrenheit = (centigrados * 1.8) + 32;
  
      //muestro el resultado en la alerta
      alert(Fahrenheit.toFixed(2) + " °F");

      document.getElementById("txtIdTemperatura").value = "";
}


// alert('la temperatura de ${Fahrenheit} fahrenheit son ${centigrados} centigrados ')

/*
Tener en cuenta la concatenacion de las cadenas y SIEMPRE si no sale apretar f12 y te va a decir el error en que linea esta 
*/