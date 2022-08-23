const argv = require('yargs')

.option('n',{
    alias: 'numero',
    type: 'number',
    describe: 'es el numero de la tabla de multiplicar'
})
.option('l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'muestra la tabla en consola'
    
})
.option('h',{
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'este es el numero hasta donde quieres la tabla'
    
})
.check( (argv, options) =>{
    if( isNaN(argv.n)){
        throw 'la base tiene que ser un numero'
    }
    return true
})
.argv;

module.exports = argv ;