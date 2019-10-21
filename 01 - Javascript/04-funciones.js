function imprimirMensaje(mensaje) {
    if (typeof mensaje === 'number' ||
        typeof mensaje === 'string') {
        const impresion = `Mensaje ${mensaje}`;
        console.log(impresion);
        return impresion;
    } else {
        console.error("Error");
    }
    // console.log("Mensaje " + mensaje);
    // return NO HAY;
}

const respuesta = imprimirMensaje({a: 1});
// const respuesta = imprimirMensaje("Carlos");
// const respuesta = imprimirMensaje(123);
console.log(respuesta); // void -> undefined

function sumarDosElementos(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(
    sumarDosElementos(1, 6)
);

// ... -> Destructurar parametros
function sumarElementos(numeroUno,
                        ...arregloParametrosInfinitos) {
    console.log(arregloParametrosInfinitos); // [2,3,4,5]
    if (arregloParametrosInfinitos) {
        // arreglo.reduce((a,b)=>a+b,numeroUno);
        return arregloParametrosInfinitos
            .reduce(
                (valorInicial, valorActual) => {
                    return valorInicial + valorActual;
                },
                numeroUno
            );
    } else {
        return numeroUno;
    }
}

const suma = sumarElementos(1,
    2, 3, 4, 5);
console.log(suma);

const restar = function restarF(a, b) {
    return a - b;
};
const restar1 = function (a, b) {
    return a - b;
};

function restar2(a, b) {
    return a - b;
}

// fat arrow function => Anonymous function
const restar1 = (a, b) => {
    return a - b;
};
const restar1 = {
    nombre: 'restar',
    restarNumeros: (a, b) => { // Anonymous function
        return a - b;
    },
    restarNumeros: function (a, b) { // Anonymous function
        return a - b;
    }
};
const transformarAMayuscula = (letra) => {
    return letra.toUpperCase();
};
const transformarAMayuscula2 = (letra) => letra.toUpperCase();
const transformarAMayuscula3 = letra => letra.toUpperCase();
// const filtrarArreglo = arreglo.filter(a => a.id > 4);
const arregloNumerosUno = [1, 2, 3, 4, 5, 6];
const arregloNumerosDos = [7, 8, 9, 10, 11, 12];
const arregloUnido = [
    ...arregloNumerosUno,
    ...arregloNumerosDos
];
const objetoAdrian = {
    nombre: 'Adrian',
};
const objetoEguez = {
    apellido: 'Eguez'
};
const objetoAdrianEguez = {
    ...objetoAdrian,
    ...objetoEguez,
    edad: 12,
};
const oAEEnString = JSON.stringify(objetoAdrianEguez);
console.log(oAEEnString);
const oAEClonado = JSON.parse(oAEEnString);
console.log(oAEEnString);
oAEEnString.edad = 21;
console.log(oAEClonado);
console.log(objetoAdrianEguez);
function cambiarEdad(edad, objeto) {
    delete objeto.edad;
    return objeto;
}
const clonadoAE ={
    ...objetoAdrianEguez
};
clonadoAE.edad = 21;
delete clonadoAE.edad;
console.log(clonadoAE);
console.log(objetoAdrianEguez);

// Destructurar el arreglo
sumarElementos(...arregloNumerosUno);
sumarDosElementos(...arregloNumerosUno);
// sumarElementos([1,2,3,4,5,6]);
// sumarElementos(1,2,3,4,5,6);
// sumarDosElementos(1,2,3,4,5,6);

console.log(restarF(4, 2));
console.log(restar(3, 5));