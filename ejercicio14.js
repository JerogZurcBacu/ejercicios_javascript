/*Programa una función para convertir grados Celsius a Fahrenheit y viceversa
Ejemplo miFuncion(0,"C") devolverá 32°F.
*/

const conversorTemp = (numero = undefined, tipo = "") => {
    if (numero === undefined) return console.warn("No se ingreso ningun número");
    if (tipo === undefined) return console.warn("No se ingreso ningun formato");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" No es un número`);
    if (tipo === "c" || "C") {
        let gfar = (numero * 1.8) + 32
        return console.log(`${gfar}°F`)
    } else if (tipo === "f" || "F") {
        let gcen = (numero - 32) * 1.8
        return console.log(`${gcen}°F`)
    }
}

conversorTemp(0, "c")
conversorTemp(32, "f")
conversorTemp(6, "C")
conversorTemp(50, "F")
conversorTemp(50)
conversorTemp("F")