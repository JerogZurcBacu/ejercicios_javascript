/*Programa una función que determine si un número es par o impar
Ejemplo miFuncion(29) devolverá Impar.
*/

const numPrimoPar = (numero = undefined) => {
    if (numero === undefined) return console.warn("No se ingreso ningun número");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" No es un número`);
    if (numero === 0) return console.warn("No se puede usar el número 0");
    
    return (numero%2 != 0)
        ? console.log(`${numero} es un número PRIMO`)
        : console.log(`${numero} es un número PAR`)
}

numPrimoPar(9);
numPrimoPar(6);
numPrimoPar(8);
numPrimoPar(-7);
numPrimoPar('3');
numPrimoPar();