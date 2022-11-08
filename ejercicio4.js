/*Programa una función que repita una cadena de texto la cantidad de veces indicada en el segundo parametro
Ejemplo: miFuncion("Hola Mundo", 4) devuelve Hola Mundo - Hola Mundo - Hola Mundo
*/

const multiplicadorTexto = (cadena = "", numero = undefined) => {
    if(!cadena) return console.warn("No ingresaste ninguna cadena de texto");
    if(numero === undefined) return console.warn("No ingresaste el número de veces a repetir");
    if(numero <= 0) return console.error("El número no puede ser menor o igual a 0")
    for(let i = 1;i<=numero;i++){
        console.log(`${cadena}, ${i}`);
    }
}
    
multiplicadorTexto("Hola Mundo", 5);
multiplicadorTexto("Hola Mundo", 0);
multiplicadorTexto("Hola Mundo", -2);
multiplicadorTexto("Hola Mundo");
multiplicadorTexto("", 5);