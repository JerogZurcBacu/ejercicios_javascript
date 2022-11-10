/*Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no
Ejemplo miFuncion(7) devolverá true.
*/

const numPrimo = (numero = undefined) => {
    if (numero === undefined) return console.warn("No se ingreso ningun número");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" No es un número`);
    if (numero === 0) return console.warn("No se puede usar el número 0");
    
    return (numero%2 != 0)
        ? console.log(`${numero} SI es un número primo`)
        : console.log(`${numero} NO es un número primo`)
}

numPrimo(9);
numPrimo(6);
numPrimo(9);
numPrimo(-7);
numPrimo('3');
numPrimo();

