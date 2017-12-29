 
 //meu código
 /*
 meuArray = [2,4,6,8]
 
 
 function quadrado(arrayVariavel)  {

    arrayVariavel.forEach(function(element) {
        console.log(element * element);      
    })
 }

quadrado(meuArray)
*/

meuArray = [2,4,6,8]
function quadrado(array){

    return array.map(function(a){
        return a * a
    })
}


module.exports = (valores) => quadrado

