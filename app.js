
const {crearConeccion} = require ('./helpers/multiplicar');
const argv = require('./config/yargs')

require('colors');

console.clear()

// console.log(process.argv)




// const numero = 9;

crearConeccion(argv.n, argv.l, argv.h)
.then (crearArchivo => console.log(crearArchivo.rainbow,'creado'))
.catch (err => console.log (err));