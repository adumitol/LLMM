const botonesNumeros = document.querySelectorAll(".boton");
const operacionBoton = document.querySelectorAll(".botonAzul");
const botonBorrar = document.querySelector(".botonAmarillo");
const botonIgual = document.querySelector(".botonVerde");
const inputDisplay = document.querySelector("input");

let primerOp = ""; 
let segundoOp = ""; 
let operacion = "";

// Función para manejar los números
botonesNumeros.forEach(boton => {
    boton.addEventListener("click", () => {
        if (operacion !== "") {
            segundoOp += boton.value; // Concatenar segundo operando
        } else {
            primerOp += boton.value; // Concatenar primer operando
        }
        inputDisplay.value = primerOp + operacion + segundoOp; // Mostrar valores en pantalla
    });
});

// Función para manejar las operaciones
operacionBoton.forEach(boton => {
    boton.addEventListener("click", () => {
        if (segundoOp !== "") {
            primerOp = calcular(parseFloat(primerOp), parseFloat(segundoOp), operacion).toString();
            segundoOp = "";
        }
        operacion = boton.value; // Guardar la operación actual
        inputDisplay.value = primerOp + operacion; // Mostrar operación
    });
});

// Función para calcular
function calcular(num1, num2, operacion) {
    switch (operacion) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "x":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return num1;
    }
}

// Botón "=" para mostrar el resultado
botonIgual.addEventListener("click", () => {
    if (segundoOp !== "") {
        primerOp = calcular(parseFloat(primerOp), parseFloat(segundoOp), operacion).toString();
        segundoOp = "";
        operacion = "";
        inputDisplay.value = primerOp; // Mostrar resultado
    }
});

// Botón "C" para reiniciar
botonBorrar.addEventListener("click", () => {
    primerOp = "";
    segundoOp = "";
    operacion = "";
    inputDisplay.value = "0"; // Restablecer pantalla
});
