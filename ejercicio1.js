/* Programa una función que cuente el número de caracteres de una cadena de texto. Ejemplo: miFuncion("Hola mundo") devolverá 10*/

const contadorLetras = (cadena) => 
    (!cadena) 
        ? console.warn("No ingresaste ninguna cadena de texto")
        : console.log(`La cadena de texto "${cadena}" contiene ${cadena.length} caracteres"`);

let num = 6

contadorLetras("Hola Mundo")
contadorLetras()
contadorLetras(num.toString())
