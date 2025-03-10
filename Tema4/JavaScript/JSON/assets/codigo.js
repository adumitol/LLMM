// Seleccionamos el botón de búsqueda y añadimos un evento de clic que llama a la función buscarPokemon
const buscadorPelicula = document.querySelector("#b1");
buscadorPelicula.addEventListener("click", buscarPelicula);

// Función asíncrona para buscar información de un Pokémon
async function buscarPelicula() {
    // Obtenemos el nombre del Pokémon ingresado por el usuario y construimos la URL para la API
    const peliNombre = document.querySelector("#nombreBuscador").value.toLowerCase();
    const url = `http://www.omdbapi.com/?t=${peliNombre}&apikey=6bd47da3`;

    // Seleccionamos los elementos del DOM donde se mostrará la información del Pokémon
    const nombre = document.querySelector(".Titulo");
    const Anyo = document.querySelector(".Anyo");
    const Duracion = document.querySelector(".Duracion");
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

        if (datos.Response == "False"){
            // En caso de error, mostramos mensajes de "No encontrado" y limpiamos los datos mostrados
            nombre.textContent = "No encontrado";
            Duracion.textContent = "";
            Anyo.textContent = "";
            console.error("Error al buscar la Pelicula:", error);
        }else{
            
            // Realizamos una solicitud a la API y obtenemos los datos del Pokémon
        nombre.textContent = datos.Title;
        Anyo.textContent = datos.Year;
        Duracion.textContent = datos.Runtime;
        }
    } 
        
    

