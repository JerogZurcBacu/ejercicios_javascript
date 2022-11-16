/* Programa una función que dado un array devuelve el número más alto y el más bajo de dicho array
* Ejemplo miFuncion([1,4,5,99,-66]) devuelve [99,-60]
*/

const minMax = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn('No se ingresó ningun arreglo');
    if (!(arreglo instanceof Array)) return console.error("El valor que se ingreso no es un arreglo");
    if (arreglo.length === 0) return console.error("El arreglo no contine ningun numero");

    for (let num of arreglo) {
        if (typeof num !== "number") return console.error("Los elementos del arreglo no son del tipo numérico");
    }

    return console.info(`El arreglo original ${arreglo} tiene como valor minimo ${Math.min(...arreglo)}, y como valor máximo ${Math.max(...arreglo)}`)
}

minMax();
minMax({'nombre': "Jorge", 'apellido': "Cruz"});
minMax([]);
minMax(["1", 2, "3"]);
minMax([1,4,5,6,7,9,2,8]);