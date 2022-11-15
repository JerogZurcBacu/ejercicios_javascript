/* Programa una función que dada una cadena de texto cuente el número de vocales y consonantes 
* Ejemplo: miFuncion("Hola Mundo") devuelve Vocales: 4, Consonantes: 5  
*/

const contadorVocCon = (cadena = "") => {
    if (!cadena) return console.warn(`No se ingreso ninguna cadena`);
    if (typeof cadena !== "string") return console.warn(`No se ingreso una cadena de texto`);

    let vocales = 0,
        consonantes = 0;

    cadena = cadena.toLocaleLowerCase(); 

    for (let letra of cadena){
        if(/[aiueoáíúéóü]/.test(letra)) {
            vocales++};
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) {
            consonantes++};
    }

    return console.info({
        cadena,
        vocales,
        consonantes
    })
} 

contadorVocCon();
contadorVocCon(3);
contadorVocCon("");
contadorVocCon("Hola Mundo");
contadorVocCon("Antirevolucionario");