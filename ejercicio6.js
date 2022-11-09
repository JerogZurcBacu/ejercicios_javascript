/*Programa una funcion para contar el número de veces que se repite una palabra en un texto largo
Ejemplo: miFuncion("Hola mundo, adios mundo") devolvera 2
*/

const cuentaPalabras = (cadena = "", palabra = "") => {
    if (!cadena) return console.warn('No se ingreso ninguna cadena');
    if (!palabra) return console.warn('No se ingreso palabra para buscar');

    let i = 0,
        contador = 0;

    while (i !== -1) {
        i = cadena.indexOf(palabra, i);
        if(i !== -1) {
            i++;
            contador++;
        }
    }
    return console.log(`La palabra ${palabra} se repite ${contador} veces`)
 } 

cuentaPalabras('Hola mundo, adios mundo', 'mundo')
cuentaPalabras('Hola mundo, adios mundo', )
cuentaPalabras('', 'mundo')