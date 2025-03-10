// Capa 1 (párrafo): Cambia el color del párrafo al pasar el ratón
const p1 = document.querySelector(".primero");
// Añade un evento que cambia el color del texto a rojo cuando el cursor entra en el párrafo
p1.addEventListener("mouseenter", () => { p1.style.color = "red"; });
// Añade un evento que cambia el color del texto a negro cuando el cursor sale del párrafo
p1.addEventListener("mouseleave", () => { p1.style.color = "black"; });

// Capa 2 (Foto Invisible): Cambia la imagen al pasar el ratón y mantener el cambio
const hwheel = document.querySelector(".urus");
// Añade un evento que cambia la imagen cuando el cursor entra en la imagen
hwheel.addEventListener("mouseenter", () => {
    const nombreImagen = hwheel.src.split("/").pop();
    if (nombreImagen === "urus.jpg") {
        hwheel.src = "./assets/supra.jpg"; // Cambia la imagen a "supra.jpg" si actualmente es "urus.jpg"
    } else {
        hwheel.src = "./assets/urus.jpg"; // Cambia la imagen a "urus.jpg" si actualmente es otra
    }
});

// Capa 3 (edad): Comprueba el valor del campo cuando se pulsa el botón y muestra un mensaje debajo
const botonEdad = document.querySelector("#Enviar");
const input = document.querySelector(".input");
const error = document.querySelector(".p");

botonEdad.addEventListener("click", intervalo);

function intervalo() {
    error.textContent = "";
    let num = parseInt(input.value); 
    if (isNaN(num)) {
        error.textContent = "Introduce un número";
        input.style.borderColor = "red";
    } else if (num >= 1 && num <= 100) {
        input.style.borderColor = "green";
        error.textContent = "El número está entre 1 y 100";
    } else {
        error.textContent = "El número no está entre 1 y 100";
        input.style.borderColor = "red";
    }
}


// Capa 4 (cambiar fondo): Cambia el fondo de los cuatro cuadrados negros
const button = document.querySelector(".boton");
const cnegros = document.querySelectorAll(".negro");
// Añade un evento que cambia el fondo de los cuadrados negros cuando se pulsa el botón
button.addEventListener("click", () => {
    cnegros.forEach((cnegro) => {
        cnegro.classList.toggle("nueva"); // Alterna la clase "nueva" que cambia el fondo a rojo
    });
});

// Capa 5 (cambiar estilo-3 botones): Cambia el estilo de la capa con tres botones
const capa1 = document.querySelector(".botonNegro");
// Estilos de las capas
const estiloCapa = document.querySelector(".ultima");
// Botones para cambiar capa blanca y letra negras
const capa2 = document.querySelector(".botonBlanco");
// Botones para cambiar capa blanca y letra negras
const capa3 = document.querySelector(".botonGris");

// Añade un evento que cambia el estilo de la capa a fondo negro y letras blancas
capa1.addEventListener("click", () => {
    estiloCapa.style.color = "white";
    estiloCapa.style.backgroundColor = "black";
});

// Añade un evento que cambia el estilo de la capa a fondo blanco y letras negras
capa2.addEventListener("click", () => {
    estiloCapa.style.color = "black";
    estiloCapa.style.backgroundColor = "white";
});

// Añade un evento que cambia el estilo de la capa a fondo gris y letras rojas
capa3.addEventListener("click", () => {
    estiloCapa.style.color = "red";
    estiloCapa.style.backgroundColor = "grey";
});
