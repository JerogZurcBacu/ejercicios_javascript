/* Programar una funcion que devuelva el texto recortado según el número de carácteres indicado. 
Ejemplo: miFuncion("Hola Mundo", 4) devolvera "Hola"
*/

const recortadorCadena = (cadena = "", recortar = undefined) =>
    (!cadena)
    ? console.warn("No ingresaste ninguna cadena de texto")
    : (recortar === undefined)
        ? console.warn("No ingresaste la longitud del recorte")
        : console.log(cadena.slice(0,recortar))

recortadorCadena("Cuando cuente cuentos...", 8)
recortadorCadena("Cuando cuente cuentos...", 4) 
recortadorCadena("Cuando cuente cuentos...", 0) 
recortadorCadena("Cuando cuente cuentos...")
recortadorCadena("",6)
    