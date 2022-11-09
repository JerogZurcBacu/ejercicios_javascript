/*Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n)
Ejemplo: miFuncion(5) devolvera 120
*/ 

const numFactorial = (numero = undefined) => {
    if (numero === undefined) return console.warn("No se ingreso ningun número")
    if (typeof numero !== "number") return console.error(`El valor "${numero}" No es un número`)
    if (numero === 0) return console.error("El número no puede ser 0")
    if (Math.sign(numero) === -1) return console.error("El número no puede ser negativo")
    
    let factorial = 1;

    for (let i = numero; i > 1; i--) {
        factorial*= i;
    }

    return console.log(`El factorial de ${numero} es ${factorial}`);
}

numFactorial();
numFactorial('45');
numFactorial([1,2,4]);
numFactorial(0);
numFactorial(-5);
numFactorial(8);