/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var numeroUno;
var numeroDos;


function sumar()
{
    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);
    
    var suma = numeroUno+numeroDos;

    alert("La suma es: "+suma);	
	
}

function restar()
{
	numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);

    var resta = numeroUno-numeroDos;

    alert("La resta es: "+resta);
}

function multiplicar()
{ 
	numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);

    var producto = numeroUno*numeroDos;

    alert("El producto es: "+producto);
}

function dividir()
{
	numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);

    var division = numeroUno/numeroDos;

    alert("La división es: "+division);
}

