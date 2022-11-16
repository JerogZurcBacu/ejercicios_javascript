/* Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente
* Ejemplo: miFuncion([7,5,7,8,6]) devuelve {asc: [5,6,7,7,8], desc:[8,7,7,6,5]}
*/

const ascDes = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn('No se ingresó ningun arreglo');
    if (!(arreglo instanceof Array)) return console.error("El valor que se ingreso no es un arreglo");
    if (arreglo.length === 0) return console.error("El arreglo no contine ningun numero");

    for (let num of arreglo) {
        if (typeof num !== "number") return console.error("Los elementos del arreglo no son del tipo numérico");
    }

    return console.info({
        asc: arreglo.map(el => el).sort(),
        desc: arreglo.map(el => el).sort().reverse()
    })
}

ascDes();
ascDes({'nombre': "Jorge", 'apellido': "Cruz"});
ascDes([]);
ascDes(["1", 2, "3"]);
ascDes([7,5,7,8,6]);