/* Programa una función que dado un array de números devuelva un objeto con 2 arreglos, en el primero almacena los números pares y en el segundo los nuúmeros inpares
* Ejemplo miFuncion([1,2,3,4,5,6,7,8,9,0]) devuelve {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}
*/

const paresIn = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn('No se ingresó ningun arreglo');
    if (!(arreglo instanceof Array)) return console.error("El valor que se ingreso no es un arreglo");
    if (arreglo.length === 0) return console.error("El arreglo no contine ningun numero");

    for (let num of arreglo) {
        if (typeof num !== "number") return console.error("Los elementos del arreglo no son del tipo numérico");
    }

    return console.info({
        pares: arreglo.filter(num => num%2===0),
        impares: arreglo.filter(num => num%2===1)
    })
}

paresIn();
paresIn({'nombre': "Jorge", 'apellido': "Cruz"});
paresIn([]);
paresIn(["1", 2, "3"]);
paresIn([1,2,3,4,5,6,7,8,9,0]);