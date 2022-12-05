/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// let nombre = txtIdNombre.value;
	// let edad = txtIdEdad.value;
	// alert("Usted se llama " + nombre + " y tiene " + edad);


	//pido espacio de memoria 
	let nombre;
	let edad;
	//asigno los valores de los elemento html a las variables 
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	//Copio los valores para mostrarlos en una alerta
	alert("Usted se llama " + nombre + " y su edad es " + edad);
	//Borro los valores
	document.getElementById("txtIdNombre").value = "";
	document.getElementById("txtIdEdad").value = "";
}

/*
APUNTES:
Que es lo que tenemos que lo primero? 
1-Conseguir espacio de memoria osea crear variable
2-Copiar lo que escribio el usuario en los input
3-Pegar los datos y que se muestre en la alerta

// back tik: ´´

otra opcion:

alert("Usted se llama $(nombre) y tiene $(edad) de años");


*/