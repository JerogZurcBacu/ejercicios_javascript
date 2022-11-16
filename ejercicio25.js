/* Programa una función que dado un arreglo de elementos, elimine los duplicados
* Ejemplo: miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devuelve ["x", 10, 2, "10", true].
*/

const duplicado = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn('No se ingresó ningun arreglo');
    if (!(arreglo instanceof Array)) return console.error("El valor que se ingreso no es un arreglo");
    if (arreglo.length === 0) return console.error("El arreglo no contine ningun numero");
    if (arreglo.length === 1) return console.error("El arreglo debe contener al menos 2 elementos");

    return console.info({
        original:arreglo,
        sinDuplicados: arreglo.filter((value, index, self) => self.indexOf(value) === index)
    })


}

duplicado();
duplicado({'nombre': "Jorge", 'apellido': "Cruz"});
duplicado([]);
duplicado(["1", 2, "3"]);
duplicado(["x", 10, "x", 2, "10", 10, true, true]);