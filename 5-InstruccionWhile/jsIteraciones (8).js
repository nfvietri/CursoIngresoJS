function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	do{

		numero = parseInt(prompt("Ingrese un número: "));

		if(numero > 0){
			positivo = positivo + numero;
		}

		if(numero < 0){
			negativo = negativo * numero;
		}

		respuesta = prompt("Desea ingresar otro número?");

	}while(respuesta == 'si');


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN