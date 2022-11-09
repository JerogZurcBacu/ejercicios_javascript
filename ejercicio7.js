/*Programa una funcion que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro) 
Ejemplo: miFuncion("Salas") devolver a True
*/

const isPalindromo = (palabra = "") => {
    if (!palabra) return console.warn('No se ingreso ninguna palabra');
    palabra = palabra.toLowerCase();
    let palindromo = palabra.split("").reverse().join("");
    return (palabra === palindromo)
        ? console.log(`La palabra ${palabra} SI es un palíndromo`)
        : console.log(`La palabra ${palabra} NO es un palíndromo`)
}

isPalindromo('salas')
isPalindromo('zorra')
isPalindromo('ana')
isPalindromo('')