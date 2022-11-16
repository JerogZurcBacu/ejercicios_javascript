/* Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado
* Ejemplo: miFuncion([1,4,5]) devuelve [1,16,25] 
*/

const cuadrado = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn('No se ingresó ningun arreglo');
    if (!(arreglo instanceof Array)) return console.error("El valor que se ingreso no es un arreglo");
    if (arreglo.length === 0) return console.error("El arreglo no contine ningun numero");

    for (let num of arreglo) {
        if (typeof num !== "number") return console.error("Los elementos del arreglo no son del tipo numérico");
    }

    const arregloCuadrado = arreglo.map(el => el*el)

    return console.info(`El arreglo: ${arreglo}, elevado al cuadrado es: ${arregloCuadrado}`)
}

cuadrado();
cuadrado({'nombre': "Jorge", 'apellido': "Cruz"});
cuadrado([]);
cuadrado(["1", 2, "3"]);
cuadrado([1,4,5]);