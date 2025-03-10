// Declaramos las variables 
const nombre = "Exarion";
const armaPrincipal = "Espada del Destino";
let armaSecundaria = "Arco Simple";
let nivel = 5;
let puntosDeVida = 100;
let armadura = "true";

// Imprimimos todo
console.log("Nombre: " + nombre);
console.log("Nivel: " + nivel);
console.log("Puntos de Vida: " + puntosDeVida);
console.log("Arma Principal: " + armaPrincipal);
console.log("Arma Secundaria: " + armaSecundaria);
console.log("Armadura: " + armadura);

// aumentamos el nivel porque lo pide el profesor
nivel ++;
// Le restamos 30 porque lo pide el profesor
puntosDeVida - 30;

// Imprimimos de nuevo todo
console.log("")
console.log("Estado del heroe despues del combate");
console.log("Nombre: " + nombre);
console.log("Nivel: " + nivel);
console.log("Puntos de Vida: " + puntosDeVida);
console.log("Arma Principal: " + armaPrincipal);
console.log("Arma Secundaria: " + armaSecundaria);
console.log("Armadura: " + armadura);

// ejercicio 2
// Pasamos el nivel a toString
let nivelCadena = nivel.toString();
// Pasamos los puntos a Float
let puntosFloat = parseFloat(puntosDeVida);
//Declaramos variables
let danyoBase = 50;
let multCritico = 2;
let probCritico = 0.5;
// Miramos a ver si es critico
let esCritico = probCritico > Math.random();
// Calculamos el danio total
let danioTotal = esCritico ? danyoBase * multCritico : danyoBase;

// Imprimimos de nuevo
console.log("")
console.log("Nivel Cadena " + nivelCadena);
console.log("Puntos float " + puntosFloat);
console.log("El heroe inflige: " + danioTotal + " puntos de anyo total porque esCritico tiene valor " +esCritico);

// ejercicio 3
// Declaramos variable
let dificultad = 1;
let experienciaActual = 90;
let experienciaGanada = 30;
let experienciaNecesaria = 100;
//Aumentamos la experiencia 
experienciaActual += experienciaGanada;
//Calculamos si subuimos de nivel
if (experienciaActual >= experienciaNecesaria) {
    nivel += 1;
    experienciaActual -= experienciaNecesaria;
}
console.log("")
//Comprobamos el nivel de dificultad
if (dificultad == 1) {
    console.log("Nivel de dificultad: " + dificultad + " .Novato");
}if (dificultad == 2) {
    console.log("Nivel de dificultad: " + dificultad + " .Media");
}if (dificultad == 3) {
    console.log("Nivel de dificultad: " + dificultad + " .Profesional");
}
// Imprimos el nivel y la experiencia actual
console.log("nivel: " + nivel);
console.log("Experiencia actual: " + experienciaActual);


// ejercicio 4
// Declaramos un array de monedas
let monedas = [5, 10, 20, 50, 100, 200];
// Declaramos otro array con los posibles atuendos
let posiblesAtuendos = ["Duende","arquero","mago","caballero"];
let monedasTotales = 0;

// Sumamos las monedas
for (let elemento of monedas) {
    monedasTotales += elemento;
}
// Imprimimos
console.log("Monedas totales: " + monedasTotales);
// Aniadimos uno mas al array
posiblesAtuendos.push("Gigante");

// Imprimimos los atuendos
posiblesAtuendos.forEach((dato, indice) => {
    console.log(`Atuendo ${indice}: ${dato}`);
});

// ejercicio 5
console.log("")
//Cremos la funcion de curar calculando la curacion
function curar(puntosActuales, cura) {
    return Math.min(puntosActuales + cura, 100);
}

// Ejemplo de uso
let puntosActuales = 80;
let cura = 30;
puntosActuales = curar(puntosActuales, cura);
console.log("Puntos actuales después de curar: " + puntosActuales);
