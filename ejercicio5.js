/* Programa una función que inviera las palabras de una cadena de texto
Ejemplo: miFuncion("Hola Mundo") devolvera "odnuM aloH"
*/

const alReves = (cadena = "") =>
    (!cadena)
    ? console.warn('No se ingreo ninguna cadena')
    : console.log(cadena.split("").reverse().join(""))

alReves('Hola Mundo')
alReves()