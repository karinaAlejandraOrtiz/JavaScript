function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var valor;
do
{
contador++;
valor= prompt("ingrese un numero");
acumulador= acumulador + parseInt(valor);
respuesta=prompt("¿Desea agregar más numeros?");

}while ( respuesta == "si" || respuesta == "SI")

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN