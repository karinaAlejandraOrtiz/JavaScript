/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{ 
var nombre;
var edad;
nombre=prompt("ingrese un nombre: ");
edad=prompt("ingrese la edad: ");
  
document.getElementById("elNombre").value=nombre;

document.getElementById("laEdad").value=edad; 

}

