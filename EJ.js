//  Miguel Ángel Burgos Martínez 
function Calcular() //Lllamado de función 
{
    //Entradas
    var totalCompra = document.getElementById('TP').value;
    let service = document.querySelector('#services').value;
    console.log(service)
    //Operaciones
    var porcentaje= service;
    var resultado1 = totalCompra*porcentaje;
    var resultado2 = parseFloat(totalCompra)+parseFloat(resultado1);

    if (totalCompra == "")
    {
        //Respuesta negativa
        document.getElementById('r1').innerHTML = "INTRODUZCA TODOS LOS DATOS";
        document.getElementById('r2').innerHTML = " --- ";
        document.getElementById('r3').innerHTML = " --- ";
        document.getElementById('r4').innerHTML = " --- ";
    }

    else
    {
        //Respuesta positiva
        document.getElementById('r1').innerHTML = " ";
        document.getElementById('r2').innerHTML = totalCompra;
        document.getElementById('r3').innerHTML = resultado1.toFixed(2);
        document.getElementById('r4').innerHTML = resultado2.toFixed(2); 
    }
}

