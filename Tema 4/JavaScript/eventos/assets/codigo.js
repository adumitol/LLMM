// Creamos las constantes necesarios para el html
const p1 = document.querySelector(".niidea");
const p2 = document.getElementById("niidea2");
const b = document.querySelector("body");
const hwheel = document.querySelector(".urus");
const invisible = document.querySelector(".truck");
const multiplicar = document.querySelector(".niidea3");
const button = document.querySelector(".boton");

// Parrafo para un click
p1.addEventListener("click", () => alert("Parrafo 1 click"));
//Parrafo para doble click
p2.addEventListener("dblclick", () => alert("Parrafo 2 doble click"));
// Mensaje al recargar la pagina en el body
b.addEventListener("load", mensaje());


hwheel.addEventListener("click", () => {
    //Creamos 2 constantes para almacenar los numeros y pasarlos a float
    const num1 = parseFloat(prompt("Introduce el primer número:"));
    const num2 = parseFloat(prompt("Introduce el segundo número:"));
    //Comprobamos si los numeros son correctos
    if (isNaN(num1) || isNaN(num2)) {
        alert("El número no es válido");
    } else {
        //Creamos una constante donde almacenamos el mayor numero
        const maxNum = Math.max(num1, num2);
        alert(`El número máximo es ${maxNum}`);
    }
});


invisible.addEventListener("mouseleave", () => {
    // Creamos una constante para almacenar el numero introducido
    const num = parseFloat(prompt("Introduce un número:"));
    // Comprobamos si es un numero valido
    if (isNaN(num)) {
        alert("El número no es válido");
    } else {
        //Calculamos si el numero es par con expresiones regulares
        const resultado = (num % 2 === 0) ? "par" : "impar";
        alert(`El número ${num} es ${resultado}`);
    }
});

//Creamos la variable fuera de la suma de los clicks
let contarClicks = 0;
button.addEventListener("click", () => {
    //sumamos un click por cada vez que se da un click
    contarClicks++;
    //Imprimimos
    alert(`Has pulsado el botón ${contarClicks} veces`);
});

multiplicar.addEventListener("mouseenter", () =>{
    //Creamos 2 constantes para guardar los numeros introducidos pasados a FLOAT
    const num1 = parseFloat(prompt("Introduce el primer número:"));
    const num2 = parseFloat(prompt("Introduce el segundo número:"));
    //Comprobamos que el numero es valido
    if (isNaN(num1) || isNaN(num2)) {
        alert("El número no es válido");
    } else {
        //Creamos unsa constante que es la multiplicacion de los numeros
        const multiplicacion = num1 * num2 ;
        // Imprimimos
        alert(`La multiplicacion es ${multiplicacion}`);
    }
}
//Creamos la funcion del mensaje
)
function mensaje() {
    alert("Bienvenido a la practica de eventos");
}
