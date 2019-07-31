function mostrar()
{

do{ 

var sexo = prompt("ingrese f ó m .");
sexo.toLowerCase();

} while (sexo != 'm' && sexo != 'f');

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN