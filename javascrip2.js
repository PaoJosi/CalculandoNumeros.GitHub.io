//almacena toda la informacion
var num1, num2; 
var respuesta;
var indiceOpcorrecta;
var operacion;

txt_operacion = document.getElementById("operacion");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msja = document.getElementById("msja");
txt_resultado = document.getElementById("resultado");

function comenzar() {
    txt_resultado.innerHTML = "?";
    txt_msja.innerHTML = "";

    // Generamos dos números aleatorios
    num1 = Math.round(Math.random() * 10);
    num2 = Math.round(Math.random() * 10);
    
    // Elegimos una operación aleatoria
    var operacionAleatoria = Math.floor(Math.random() *4);
    switch (operacionAleatoria) {
        case 0: // Suma
            operacion = "+";
            respuesta = num1 + num2;
            break;
        case 1: // Resta
            operacion = "-";
            respuesta = num1 - num2;
            break;
        case 2: // Multiplicación
            operacion = "*";
            respuesta = num1 * num2;
            break;
        case 3: // División
            if (num2 === 0) num2 = 1; // Evitamos división por cero
            num1 = num1 * num2; // Aseguramos que num1 sea un múltiplo de num2
            operacion = "/";
            respuesta = num1 / num2;
            break;
    }

    // Asignamos la operación para que se visualice
    txt_operacion.innerHTML = num1 + " " + operacion + " " + num2 + " =";

    // Generamos opciones
    indiceOpcorrecta = Math.floor(Math.random() * 3);
    if (indiceOpcorrecta == 0) {
        op1.innerHTML = respuesta;
        op2.innerHTML = respuesta + 1;
        op3.innerHTML = respuesta - 1;
    } else if (indiceOpcorrecta == 1) {
        op2.innerHTML = respuesta;
        op1.innerHTML = respuesta + 2;
        op3.innerHTML = respuesta - 1;
    } else {
        op3.innerHTML = respuesta;
        op1.innerHTML = respuesta + 1;
        op2.innerHTML = respuesta - 1;
    }
}

// Función para chequear la respuesta elegida del usuario
function controlarRespuesta(opcionElegida) {
    txt_resultado.innerHTML = opcionElegida.innerHTML;

    // Controlamos si está bien
    if (respuesta == opcionElegida.innerHTML) {
        txt_msja.innerHTML = "EXCELENTE!!!";
        txt_msja.style.color = "green";
        setTimeout(comenzar, 2000);
    } else {
        txt_msja.innerHTML = "INTENTA DE NUEVO!!";
        txt_msja.style.color = "red";
        setTimeout(limpiar, 2000);
    }
}

function limpiar() {
    txt_resultado.innerHTML = "?";
    txt_msja.innerHTML = "";
}

comenzar();