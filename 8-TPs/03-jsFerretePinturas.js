/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").

B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let Fahrenheit;
    let centigrados;

    Fahrenheit = parseInt(document.getElementById("txtIdTemperatura").value);

    centigrados = (Fahrenheit - 32) * 5 / 9;    
    
    alert (centigrados);

}

function CentigradosFahrenheit () 
{

      //resevo espacio
      let Fahrenheit;
      let centigrados;
      
      centigrados = parseInt(document.getElementById("txtIdTemperatura").value);
  
      Fahrenheit = (centigrados * 1.8) + 32;
  
      alert("la temperatura de " Fahrenheit + " fahrenheit es de " + centigrados " centigrados");
}


// alert('la temperatura de ${Fahrenheit} fahrenheit son ${centigrados} centigrados ')