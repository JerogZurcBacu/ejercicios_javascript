/* Programa una función que dada una string, devuelva un array de textos separados por cierto caracter.
Ejemplo: miFuncion("Hola que tal", " ") devolvera ['Hola', 'que', 'tal'] 
*/

const separadorCadena = (cadena = "", separador = undefined) =>
    (!cadena)
        ? console.warn("No ingresaste ninguna cadena de texto")
        : (separador === undefined)
            ? console.warn("No ingresaste ningun separador")
            : console.log(cadena.split(separador));

separadorCadena("Heroes always get remembered but you know legends never die", " ")