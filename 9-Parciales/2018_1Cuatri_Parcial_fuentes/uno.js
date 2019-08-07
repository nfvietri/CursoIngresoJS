
function mostrar()
{

    var lado1;
    var lado2;
    var lado3;

    do {
        lado1 = parseInt(prompt("Ingrese la medida del primer lado: "));
    } while (isNaN(lado1) || lado1 < 0);

    do {
        lado2 = parseInt(prompt("Ingrese la medida del segundo lado: "));
    } while (isNaN(lado2));

    do {
        lado3 = parseInt(prompt("Ingrese la medida del tercer lado: "));
    } while (isNaN(lado3));


    if(lado1 == lado2 && lado1 == lado3){
        var perimetro = lado1*3;
        alert("El perímetro es: "+perimetro);
    } else {
        alert("Error, verifique la medida de los lados");
    }

}


/*

realizar un algoritmo que pida los datos necesarios para un triangulo equilatero
validad que sea equilatero y mostrar el perimetro

*/