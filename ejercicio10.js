/*Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro)
Ejemplo: miFuncion(2002) devolvera True
*/ 

const isCapicua = (numero = 0) => {
    if (!numero) return console.warn('No se ingreso ningun número');
    if (typeof numero !== "number") return console.error(`El valor ${numero} No es un número`);
    numero = numero.toString();
    let capicua = numero.split("").reverse().join("");
    return (numero === capicua)
        ? console.log(`El número ${numero} SI es capicúa`)
        : console.log(`El número ${numero} NO es capicúa`)
}

isCapicua(12421)
isCapicua()
isCapicua('67876')
isCapicua(2002)
isCapicua(78965)