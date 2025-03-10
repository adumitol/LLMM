// Anyadimos las constantes que vayamos a ultilizar del HTML
const botonCalcular = document.querySelector(".calcular");
const resultado = document.querySelector(".resultado");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const operacion = document.querySelector(".operacion");

botonCalcular.addEventListener("click", () => {
    calcular(num1, num2, operacion, resultado);
});
// Creamos una funcion para comprobar que los numeros sean correctos
function calcular(num1, num2, operacion, resultado) {
    let a = parseFloat(num1.value);
    let b = parseFloat(num2.value);
    //Comprobamos si es un numero
    if (isNaN(a) || isNaN(b)) {
        resultado.style.color = 'red';
        resultado.value = "Introduce números válidos en ambos campos.";
        return;
    }

    //Ponemos el resultado vacio
    resultado.value = '';
    //variable del resultado vacio
    let resultadoCalculo;
    //Switch para comprobar la opcion
    switch (operacion.value) {
        //Para el caso de la suma
        case 'suma':
            resultadoCalculo = a + b;
            break;
        //Para el caso de la resta
        case 'resta':
            resultadoCalculo = a - b;
            break;
        //Para el caso de la multiplicacion 
        case 'multiplicacion':
            resultadoCalculo = a * b;
            break;
        //Para el caso de la division
        case 'division':
            //Comprobamos si la division es entre 0
            if (b == 0) {
                resultado.style.color = 'red';
                resultado.value = 'Error: División por cero.';
                return;
            }
            
            resultadoCalculo = a / b;
            break;
        default:
            //Si no se pone ningun numero sale un error en rojo.
            resultado.style.color = 'red';
            resultado.value = 'Selecciona una operación válida.';
            return;
    }
    resultado.style.color = 'black';
    //Mostamos el resultado
    resultado.value = `${resultadoCalculo}`;
}
