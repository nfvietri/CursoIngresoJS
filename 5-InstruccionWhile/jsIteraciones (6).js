function mostrar()
{

	var i = 0;
	var numero;
	var suma = 0;
	var promedio;

	while(i < 5){

		numero = parseInt(prompt("Ingrese un número: "));

		suma = suma + numero;

		i++;

	}

	promedio = suma/5;

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN