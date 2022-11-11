/*Programa una función para convertir grados Celsius a Fahrenheit y viceversa
Ejemplo miFuncion(0,"C") devolverá 32°F.
*/

const conversorTemp = (numero = undefined, tipo = undefined) => {
    if (numero === undefined) return console.warn("No se ingreso ningun número");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" No es un número`);
    if (tipo === undefined) return console.warn("No se ingreso ningun formato");
    if (typeof tipo !== "string") return console.error(`El valor "${tipo}" No es una cadena de texto`);
    if (tipo.length !== 1 || !/(C|F)/.test(tipo)) return console.warn("Valor de inidad no reconocido")

    if (tipo === "C") {
        return console.info(`${numero}°C = ${Math.round((numero * (9/5)) + 32)}°F`)
    } else if (tipo ==="F") {
        return console.info(`${numero}°F = ${Math.round(((numero - 32)*(5/9)))}°C`)
    }
}

conversorTemp();
conversorTemp("2");
conversorTemp(2);
conversorTemp(2, true);
conversorTemp(2, "Hola");
conversorTemp(2, "E");
conversorTemp(0, "C");
conversorTemp(32, "F");
conversorTemp(100, "C");
conversorTemp(100, "F");