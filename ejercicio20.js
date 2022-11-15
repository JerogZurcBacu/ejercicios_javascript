/* Programa una función que valide que un texto sea un email válido
* Ejemplo: miFuncion("jonmircha@gmail.com") devolvera Verdadero
*/

const validarCorreo = (correo = "") => {
    if (!correo) return console.warn(`No se ingreso ninguna cadena`);
    if (typeof correo !== "string") return console.warn(`El valor ${nombre}, no es una cadena de texto`);

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);

    return(expReg)
        ? console.log(`"${correo}" es un email válido`)
        : console.warn(`"${correo}" NO es un email válido`)
}

validarCorreo();
validarCorreo("");
validarCorreo(5);
validarCorreo("joregcruzprof@gmail.com");
validarCorreo("jorge_17 arroba .com");