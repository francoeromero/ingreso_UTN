function mostrar()
{
	let numero;
    let maximo = 10;
    let minimo = 1;

    numero = Math.round(Math.random() * (maximo - minimo) + minimo);

    alert(numero);

}

/*
Math.random()  [0 , 1) va  del 0 al 1   valores decimales aleatorios 

Math.round  =   para redondear a numeros enteros  es como parseInt pero la diferencia que parseInt transforma el valor de string a number enteros

hacemos una ecuacion con el math.random utilizando variables con valores numericos y todo dentro del math.round para que redondee el numero en entero



*/