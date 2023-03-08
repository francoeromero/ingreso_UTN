/*
El equipo de E-Sports de la UTN precisa registrar los resultados de los 5 jugadores titulares que jugaron en contra de UADE E-Sports en el Torneo “Valorant Universidades CABA”.
Para esto en el programa se debe ingresar.
Los jugadores realizan asesinatos normales (Tiros a cualquier parte del cuerpo) y Asesinatos especiales (Tiros únicamente a la cabeza) estos deben estar separados dado que los especiales son más valiosos y hablan de una mayor habilidad.

	A) Nombre del jugador.
	B) Rol dentro del juego (Validar [Iniciador, Centinela, Duelista])
	B) Cantidad de asesinatos generales (No puede ser negativo ni mayor a 100)
	C) Cantidad de asesinatos especiales (No puede ser negativo ni mayor a 100)
	D) Cantidad de muertes (No puede ser negativo ni mayor a 24)
	E) Cantidad de habilidades Definitivas usadas (No puede ser negativo ni mayor a 8)
	F) Cantidad de asistencias en asesinatos. 

Luego del ingreso de los respectivos datos se debe mostrar los resultados de los siguientes puntos:

Nombre, Muertes, Cantidad de habilidades definitivas, y cantidad de asesinatos especiales (con tiros a la cabeza) del jugador con la mayor cantidad de asesinatos generales.
Nombre, Muertes, del jugador con la menor cantidad de asesinatos generales.
Porcentaje de asesinatos especiales sobre el total de asesinatos.
Cuál fue el rol que tuvo más cantidad de asesinatos especiales.
Encontrar el jugador y obtener el NOMBRE y ROL, del MVP (Most Valuable Player), para esto dicho jugador tiene que ser de los roles (Iniciador o Duelista) tener al menos: 20 Asesinatos generales, 8 Asesinatos especiales, y 3 habilidades definitivas usadas.
*/


function comenzar()
{
    let i;
	let mensaje;
    let nombreJugador;
    let rolDentroJuego;
    let cantAsesinatosEspeciales;
    let cantAsesinatosGral;
    let cantidadMuertes;
    let cantHabilidadesDef;


    
	for (i = 0; i < 5; i++) {
        do
        {
            nombreJugador = prompt("Ingrese nombreJugador");
            nombreJugador = nombreJugador.toLowerCase();
        }while(!isNaN(nombreJugador));   
        do
        {
            rolDentroJuego = prompt("Ingrese rolDentroJuego");
            rolDentroJuego = rolDentroJuego.toLowerCase();
        }while(rolDentroJuego != "iniciador" && rolDentroJuego != "centinela" && rolDentroJuego != "duelista");
        do
        {
            cantAsesinatosGral = prompt("Ingrese cantAsesinatosGral");
            cantAsesinatosGral = parseInt(cantAsesinatosGral);
        }while(isNaN(cantAsesinatosGral) || cantAsesinatosGral < -1 || cantAsesinatosGral>100);    
        do
        {
            cantAsesinatosEspeciales = prompt("Ingrese cantAsesinatosEspeciales");
            cantAsesinatosEspeciales = parseInt(cantAsesinatosEspeciales);
        }while(isNaN(cantAsesinatosEspeciales) || cantAsesinatosEspeciales < -1 || cantAsesinatosEspeciales>100);  
        do
        {
            cantidadMuertes = prompt("Ingrese cantidadMuertes");
            cantidadMuertes = parseInt(cantidadMuertes);
        }while(isNaN(cantidadMuertes) || cantidadMuertes<0||cantidadMuertes>24);
        do
        {
            cantHabilidadesDef = prompt("Ingrese cantHabilidadesDef");
            cantHabilidadesDef = parseInt(cantHabilidadesDef);
        }while(isNaN(cantHabilidadesDef) || cantHabilidadesDef < -1 ||cantHabilidadesDef>8);

        let nombreMayorCantidadMuertesEspeciales;
        let cantidadMuertesMayor;
        let cantidadAsesinatosEspecialesMayor;
        let cantidadAsenitatosGeneralesMayor;
        let cantidaHabilidadesDefMayor;

        if(i==0)
        {
            //1
            nombreMayorCantidadMuertesEspeciales = nombreJugador;
            cantidadMuertesMayor = cantidadMuertes;
            cantidaHabilidadesDefMayor = cantHabilidadesDef;
            cantidadAsesinatosEspecialesMayor = cantAsesinatosEspeciales;
            cantidadAsenitatosGeneralesMayor = cantAsesinatosGral;
        }
        else
        {
            if(cantAsesinatosGral > cantidadAsenitatosGeneralesMayor)
            {
                nombreMayorCantidadMuertesEspeciales = nombreJugador;
                cantidadMuertesMayor = cantidadMuertes;
                cantidaHabilidadesDefMayor = cantHabilidadesDef;
                cantidadAsesinatosEspecialesMayor = cantAsesinatosEspeciales;
                cantidadAsenitatosGeneralesMayor = cantAsesinatosGral;
            }
        }
	}
	//****************FIN DE ITERACIÓN************************ */

	//muestro
	// mensaje = "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	alert(mensaje);


}