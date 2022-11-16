/* Programa una función que dado un arreglo de números obtenga el promedio
* Ejemplo: promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

const promedio = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn('No se ingresó ningun arreglo');
    if (!(arreglo instanceof Array)) return console.error("El valor que se ingreso no es un arreglo");
    if (arreglo.length === 0) return console.error("El arreglo no contine ningun numero");

    for (let num of arreglo) {
        if (typeof num !== "number") return console.error("Los elementos del arreglo no son del tipo numérico");
    }

    return console.info(
        arreglo.reduce((total, num, index, arreglo) => {
            total += num;
            if (index === arreglo.length-1) {
                return `El promedio de ${arreglo.join("+")} es ${total/arreglo.length}`;
            } else {
                return total;
            }
        })
    )
}

promedio();
promedio({'nombre': "Jorge", 'apellido': "Cruz"});
promedio([]);
promedio(["1", 2, "3"]);
promedio([9,8,7,6,5,4,3,2,1,0]);