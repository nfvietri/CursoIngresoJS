function mostrar()
{


var suma = 0;
var numero;

for(var i = 0; i < 5; i++){

	do{

		numero = parseInt(prompt("Ingrese un número: "));

	}while(isNaN(numero));

	suma = suma + numero;
	
}

var promedio = suma/5;

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=promedio;


/*

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

*/

}//FIN DE LA FUNCIÓN