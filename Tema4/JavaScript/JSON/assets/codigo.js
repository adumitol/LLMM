// constantes
const tituloPelicula = document.querySelector(".Titulo");
const anyoPelicula = document.querySelector(".Anyo");
const duracionPelicula = document.querySelector(".Duracion");
// valoraciones
const valoraciones = document.querySelector("#seleccionValoraciones");

// Constante del botón buscar
const boton = document.querySelector("#b1");
boton.addEventListener("click", buscarPelicula);

// Función para buscar información de una película
async function buscarPelicula() {
    const pelicula = document.querySelector("#nombreBuscador").value.toLowerCase();
    const url = `http://www.omdbapi.com/?t=${pelicula}&apikey=6bd47da3`;

    try {
        // Obtenemos la respuesta del URL
        const response = await fetch(url);
        // Procesamos la respuesta a un objeto data en JavaScript
        const data = await response.json();

        // Verificamos si la película no fue encontrada
        if (data.Response === "False") {
            throw new Error("");
        }

        tituloPelicula.innerHTML = `<h3>${data.Title}</h3>`;
        anyoPelicula.innerHTML = `<h3>${data.Year}</h3>`;
        duracionPelicula.innerHTML = `<h3>${data.Runtime}</h3>`;

        // Limpiamos antes para que no se repitan los tipos
        valoraciones.innerHTML = "<option value=''>Selecciona una valoración</option>";

        // Añadimos las nuevas valoraciones
        data.Ratings.forEach(element => {
            valoraciones.innerHTML += `<option>${element.Source}</option>`;
        });

    } catch (error) {
        // Parrafo abajo del todo
        resultado.innerHTML = `<p>No se encontró la película</p>`;
    }
}

// Botón para buscar las opiniones
const botonValoraciones = document.querySelector(".botonValoraciones");
const resultado = document.querySelector(".resultadoValoraciones");

// Evento para mostrar la valoración seleccionada
botonValoraciones.addEventListener("click", mostrarValoracion);

// Función para mostrar la valoración seleccionada
async function mostrarValoracion() {
    const pelicula = document.querySelector("#nombreBuscador").value.toLowerCase();
    const url = `http://www.omdbapi.com/?t=${pelicula}&apikey=6bd47da3`;

    try {
        // Obtenemos la respuesta del URL
        const response = await fetch(url);
        const data = await response.json();

        // Verificamos si la película no fue encontrada
        if (data.Response === "False") {
            throw new Error("");
        }

        // Añadimos las nuevas valoraciones
        data.Ratings.forEach(element => {
            if (element.Source == valoraciones.value) {
                resultado.innerHTML = `<p>La valoración es: ${element.Value}</p>`;
            }
        });

    } catch (error) {
        resultado.innerHTML = `<p>No se encontró la opinión</p>`;
    }
}
