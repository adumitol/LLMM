// Seleccionamos el botón y añadimos un evento 'click' que llama a la función buscarPersonaje
document.querySelector("#b1").addEventListener("click", buscarPersonaje);

// Función asíncrona para buscar información del personaje
async function buscarPersonaje() {
    // Obtenemos el número del personaje seleccionado y construimos la URL de la API
    const personajeId = document.querySelector("#seleccionPersonaje").value;
    const url = `https://rickandmortyapi.com/api/character/${personajeId}`;

    // Seleccionamos los elementos donde se mostrará la información
    const nombre = document.querySelector(".nombre");
    const imagen = document.querySelector(".imagen");
    const especie = document.querySelector(".especie");
    const genero = document.querySelector(".genero");
    const episodios = document.querySelector(".episodios");
    const tabla = document.querySelector("table");

    try {
        // Realizamos la solicitud a la API
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        // Mostramos la información del personaje
        nombre.textContent = datos.name;
        //Ponemos la imagen desde JS usando el innerHTML
        imagen.innerHTML = `<img src="${datos.image}" alt="${datos.name}">`;
        especie.textContent = datos.species;
        genero.textContent = datos.gender;
        episodios.textContent = datos.episode.length; // Número total de episodios

        // Cambiamos el estilo de la tabla según el género
        tabla.classList.remove("hombre", "mujer");
        if (datos.gender == "Male") tabla.classList.add("hombre");
        if (datos.gender == "Female") tabla.classList.add("mujer");

    } catch (error) {
        // Manejamos los errores mostrando mensajes y limpiando los datos
        nombre.textContent = "No encontrado";
        imagen.innerHTML = "";
        especie.textContent = "";
        genero.textContent = "";
        episodios.textContent = "";
        console.error("Error al buscar el personaje:", error);
    }
}
