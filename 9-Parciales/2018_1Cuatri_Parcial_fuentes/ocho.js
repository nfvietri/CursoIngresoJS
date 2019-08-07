function mostrar()
{

var letra;
var numero;
var cantPares = 0;
var cantImpares = 0;
var cantCeros = 0;
var sumaPositivos = 0;
var sumaNegativos = 0;
var numMax;
var numMin;
var letraMax;
var letraMin;
var respuesta = 'si';
var primera = true;

while(respuesta = 'si'){

    //VALIDACIONES

    letra = prompt("Ingrese una letra: ");

    do{
           numero = parseInt(prompt("Ingrese un número: ")); 

    }while(isNaN(numero) || numero < -100 || numero > 100);

    //CANTIDAD PARES E IMPARES

    if(numero % 2 == 0){
        cantPares++;
    } else {
        cantImpares++;
    }

    // SUMA POSITIVOS, SUMA NEGATIVOS

    if(primera){
        primera = false;
        numMax = numero;
        numMin = numero;
        letraMax = letra;
        letraMin = letra;
    } else {
        if(numero > numMax){
            numMax = numero;
            letraMax = letra;
        } else if (numero < numMin){
            numMin = numero;
            letraMin = letra;
        }
    }


}



}
