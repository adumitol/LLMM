// Seleccionamos el botón de búsqueda y añadimos un evento de clic que llama a la función buscarPokemon
const buscadorPokemon = document.querySelector("#b1");
buscadorPokemon.addEventListener("click", buscarPokemon);

// Función asíncrona para buscar información de un Pokémon
async function buscarPokemon() {
    // Obtenemos el nombre del Pokémon ingresado por el usuario y construimos la URL para la API
    const pokemonName = document.querySelector("#nombreBuscador").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    // Seleccionamos los elementos del DOM donde se mostrará la información del Pokémon
    const nombre = document.querySelector(".nombre");
    const imagen = document.querySelector(".imagen img");
    const tipo = document.querySelector(".tipo");
    const altura = document.querySelector(".altura");

    try {
        // Realizamos una solicitud a la API y obtenemos los datos del Pokémon
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        // Mostramos el nombre y la imagen del Pokémon
        nombre.textContent = datos.name;
        imagen.src = datos.sprites.front_default;

        //Limpiamos el tipo cada vez, por si le da mas de una vez al boton no se imprima sin parar
        tipo.innerHTML = ""; 
        
        // Recorremos el array de tipos y los mostramos en la lista
        datos.types.forEach(element => {
            tipo.innerHTML += `<li>${element.type.name}</li>`;
        });

        // Mostramos la altura del Pokémon
        altura.textContent = datos.height;
    } catch (error) {
        // En caso de error, mostramos mensajes de "No encontrado" y limpiamos los datos mostrados
        nombre.textContent = "No encontrado";
        imagen.src = "";
        tipo.textContent = "";
        altura.textContent = "";
        console.error("Error al buscar el Pokémon:", error);
    }
}
