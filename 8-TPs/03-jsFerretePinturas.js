/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").

B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() 
{
    //pido espacio de memoria declarando variables
    let fahrenheitIngresado;
    let fahrenheit;
    let centigrados;
    fahrenheitIngresado = document.getElementById("txtIdTemperatura").value;
    //paso a valor numerico flotante porque se trabaja en decimales
    fahrenheit = parseFloat(fahrenheitIngresado);
    //hago el calculo del valor x con el dato que me da el usuario, en este caso seria fahrenheit
    centigrados = (fahrenheit - 32) * 5 / 9;    
    //muestro el resultado redondeando con 2 decimales
    alert(`La temperatura de ${fahrenheit} °F en centigrados son ${centigrados.toFixed(2)} °C`);
    //limpio la entrada para una nueva operacion
    document.getElementById("txtIdTemperatura").value = "";
}

function CentigradosFahrenheit() 
{
      //resevo espacio declarando variables
      let fahrenheit;
      let centigradosIngresado;
      let centigrados;
      //asigno el id a la variable    
      centigradosIngresado = document.getElementById("txtIdTemperatura").value;
      //paso el valor a decimales 
      centigrados = parseFloat(centigradosIngresado);
      //calculo 
      fahrenheit = (centigrados * 1.8) + 32;
      //muestro el resultado en la alerta
      alert(`La temperatura de ${centigrados} °C en centigrados son ${fahrenheit.toFixed(2)} °F`);
      //limpio la entrada para una nueva operacion
      document.getElementById("txtIdTemperatura").value = "";
}


// alert('la temperatura de ${Fahrenheit} fahrenheit son ${centigrados} centigrados ')

/*
Tener en cuenta la concatenacion de las cadenas y SIEMPRE si no sale apretar f12 y te va a decir el error en que linea esta 
*/