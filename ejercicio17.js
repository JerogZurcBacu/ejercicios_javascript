/*Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy
Ejemplo: miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return console.warn('No ingresaste la fecha');
    if (!(fecha instanceof Date)) return console.error('El valor ingresado no es una fecha valida');

    let hoyMenoFecha = New.Date().getTime() - fecha.getTime(),
        aniosEnMS = 1000*60*60*24*365,
        aniosHumanos = Math.floor(hoyMenoFecha / aniosEnMS);

    return (Math.sign(aniosHumanos) === -1)
        ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
        : (Math.sign(aniosHumanos) === 1)
            ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
}

calcularAnios();
calcularAnios({});
calcularAnios(false);
calcularAnios(New Date());
calcularAnios(New Date(1984, 4, 23));
calcularAnios(New Date(1884, 4, 23));
calcularAnios(New Date(20884, 4, 23));