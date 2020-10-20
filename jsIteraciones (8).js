function mostrar()
{
/*Al presionar el botón pedir números hasta que el usuario quiera, 
sumar los que son positivos y multiplicar los negativos.*/
var contador=0;
var positivo=0;
var negativo=1;
var respuesta='si';

do
{
contador=parseInt(prompt("Ingrese un número"));
respuesta=prompt("¿Desea seguir ingresando numeros?");

if (contador >= 0)
{
	negativo= contador;
}
else
{
	alert("negativos");
}


} while (respuesta=="SI"||respuesta=="si")


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN