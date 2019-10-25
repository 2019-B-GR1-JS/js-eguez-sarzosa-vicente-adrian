function calculo(numUno,
                 numDos,
                 funcionCalculo) {
    const total = numUno + numDos;
    return funcionCalculo(numUno, numDos, total);
}

const numeroUno = 3;
const numeroDos = 5;
const suma = (numUno, numDos, total) => {
    return total;
};
console.log(suma); // Definicion FUNCTION
console.log(suma( // Ejecucion FUNCTION
    1,
    2,
    3)
);
const resultadoCalculo = calculo(
    numeroUno,
    numeroDos,
    (numUno,numDos,total)=>{
        return total/2;
    }
);
console.log(resultadoCalculo);

function forEachLocal(arreglo, funcion){
    for(let i = 0; i < arreglo.length; i ++){
        funcion(
            arreglo[i],
            i,
            arreglo
        );
    }
}
forEachLocal(
    [1,2,3,4,5],
    (valorActual, indiceActual, arreglo)=>{
        console.log('valorActual',valorActual);
    }
);






