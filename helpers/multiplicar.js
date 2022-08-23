const fs = require('fs');
const colors = require('colors');

const crearConeccion = async (numero, listar = false, hasta =10)=>{

try{

    let salida ='';
    let consola ='';


for ( let i =1; i <=hasta; i++){
    salida += `${numero} x ${i} = ${numero * i}\n` 
    consola += `${numero} ${'x'.blue} ${i} ${'='.rainbow} ${numero * i}\n` 
}

if(listar){

    console.log('==================='.green);
    console.log('tabla del '.green, colors.blue(numero) );
    console.log('==================='.green);

    console.log (consola);

}



fs.writeFileSync (`./salida/tabla de ${numero}.txt`, salida)

return `tabla de ${numero}.txt`;


    }catch (err){
        throw err

    }


}

module.exports = {

    crearConeccion

}