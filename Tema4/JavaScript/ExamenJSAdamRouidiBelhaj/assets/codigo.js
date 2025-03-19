// Seleccionamos el botón de búsqueda y añadimos un evento de clic que llama a la función buscarPokemon
const buscador = document.querySelector("#b1");
buscador.addEventListener("click", buscarPalabra);

// Función asíncrona para buscar información de un Pokémon
async function buscarPalabra() {
    // Obtenemos el nombre del Pokémon ingresado por el usuario y construimos la URL para la API
    const palabra = document.querySelector("#nombreBuscador").value.toLowerCase();
    const url =  `https://rae-api.com/api/words/${palabra}`;

    // Seleccionamos los elementos del DOM donde se mostrará la información del Pokémon
    const solucion = document.querySelector(".solucion");
    const solucion2 = document.querySelector(".solucion2");
    try {
        // Realizamos una solicitud a la API y obtenemos los datos del Pokémon
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        // Verificamos si la película no fue encontrada
        if (data.data.ok === "False") {
            throw new Error("");
        }
        solucion.style.color="green";
        // Mostramos el nombre y la imagen del Pokémon
        solucion.innerHTML = `<h2>${data.data.word}</h2> ` + `<h2>(${data.data.meanings[0].origin.raw})<h2>`;

            solucion2.innerHTML = '';
         // Recorremos el array de tipos y los mostramos en la lista
         data.data.meanings.forEach(element => {
            solucion2.innerHTML += `<p>${element.senses[0].raw}<p>`;
        });

    } catch (error) {
        // En caso de error, mostramos mensajes de "No encontrado" y limpiamos los datos mostrados
        solucion.style.color="red";
        solucion.textContent = "Palabra no encontrada";
        solucion2.textContent = "";
        console.error("Error al buscar la Palabra:", error);
    }
}
