/*Programa una fucnion que elimine cierto patron de caracteres de un texto dado
Ejemplo: miFuncion("xyz1", "xyz2", "xyz3", "xyz4", "xyz5", "xyz") devolvera 1,2,3,4,5
*/

const eliminarPatron = (cadena = "", patron = "") =>
    (!cadena)
        ? console.warn("No ingresaste ninguna cadena de texto")
        : (!patron)
            ? console.warn("No ingresaste ningun patron")
            : console.log(cadena.replace(new RegExp(patron, "ig"), ""));

eliminarPatron()
eliminarPatron("xyz1, xyz2, xyz3, xyz4, xyz5")
eliminarPatron("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz")