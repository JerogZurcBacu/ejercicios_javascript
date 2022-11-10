/*Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada
Ejemplo: miFuncion(1000, 20) devolverá 800.
*/ 

const promocion = (precio = undefined, decuento = 0) => {
    if (!precio) return console.warn('No se ingreso el precio');
    if (typeof precio !== "number") return console.error(`El valor "${precio}" No es un número`);
    if (typeof decuento !== "number") return console.error(`El valor "${decuento}" No es un número`);
    if (precio <= 0) return console.error('El precio no puede ser 0, ni un número negativo');
    if (!decuento) return console.warn('No se ingreso el descuento');
    let rebajado = precio * ((100 - decuento) / 100);
    return console.log(`El precio con descuento es de ${rebajado}`)
}

promocion();
promocion(-500, 50);
promocion(9000);
promocion(1000, 20);
promocion(1000, 40);
promocion(1000, 80);
promocion(5000, 20);
promocion("1000", 20);
promocion(1000, "20");