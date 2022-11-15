/*Programa una función que valide que un texto sea un nombre válido.
* Ejemplo: miFuncion("Jonayhan MirCha") Devolvera Verdadero 
*/

const validarNombre = (nombre = "") => {
    if (!nombre) return console.warn(`No se ingreso ninguna cadena`);
    if (typeof nombre !== "string") return console.warn(`El valor ${nombre}, no es una cadena de texto`);

    let expRegular = /^[A-Za-zÑñAIUEOaiueoÁÍÚÉÓáíúéó\s]+$/g.test(nombre);
    
    return (expRegular)
        ? console.log(`${nombre}, es un nombre válido`)
        : console.log(`${nombre}, NO es un nombre válido`) 
}

validarNombre();
validarNombre("");
validarNombre(5);
validarNombre("Jorge Cruz");
validarNombre("el_senoritojorge58");