/*Programa una función para convertir números de base binaria a decimal y viceversa
Ejemplo: miFuncion(100,2) devolverá 4 base 10.
*/ 

const conversorBinDec = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn("No se ingreso ningun número");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" No es un número`);
    if (base === undefined) return console.warn("No se ingreso ninguna base");
    if (typeof base !== "number") return console.error(`El valor "${base}" No es un número`);

    if (base === 2){
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`)
    } else if (base === 10) {
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 2`)
    } else {
        return console.error(`El número ingresado como base es incorrecto`)
    }
}

conversorBinDec();
conversorBinDec("2");
conversorBinDec(2, "tio");
conversorBinDec(100,2);
conversorBinDec(10, 10);
