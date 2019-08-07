function mostrar()
{

    var marca;
    var peso;
    var temperatura;
    var primera = true;
    var cantTempPares = 0;
    var marcaProdMasPesado;
    var cantMenosCero = 0;
    var sumaPesoProd = 0;
    var cantProductos = 0;
    var pesoMax;
    var pesoMin;
    
    //INGRESO DE DATOS Y VALIDACIONES

    do{


        marca = prompt("Ingrese la marca del producto: ");

        do{

        peso = parseInt(prompt("Ingrese el peso del producto: "));

        }while(isNaN(peso) || peso < 1 || peso > 100);

        do{

        temperatura = parseInt(prompt("Ingrese la temperatura: "));

        }while(isNaN(temperatura) || temperatura < -30 || temperatura > 30);

        // CANTIDAD TEMPERATURAS PARES
        if(temperatura % 2 == 0){
            cantTempPares++;
        }

        //PRODUCTO MAS PESADO
        if(primera){
            primera = false;
            marcaProdMasPesado = marca;
            pesoMax = peso;
            pesoMin = peso;

        } else {}
        
        if(peso > pesoMax){
                pesoMax = peso;
                marcaProdMasPesado = marca;
        } else if (peso < pesoMin){
                pesoMin = peso;
        }

        //CANT PRODUCTOS A MENOS DE CERO
        if(temperatura < 0){
            cantMenosCero++;
        }

        cantProductos++;
        sumaPesoProd = sumaPesoProd + peso;



    }while(confirm("Desea ingresar otro producto?"));

    var promedio = parseInt(sumaPesoProd/cantProductos);

    document.write("a) Cantidad temp pares: "+cantTempPares+"<br> b)Marca prod más pesado: "+marcaProdMasPesado+"<br> c)Cantidad productos a menos de 0 grados: "+cantMenosCero+"<br> d) Promedio peso productos: "+promedio+"<br> e)Peso maximo: "+pesoMax+"<br> Peso minimo: "+pesoMin);



}
