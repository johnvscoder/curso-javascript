//Retrollamada
function retrollamada(array, funcion) {
    for(let elemento of array)
        funcion(elemento);
}

const funcion = (elemento) => {
    console.log(elemento ** 2);
}

const funcion2 = (elemento) => {
    console.log(elemento * 2);
}

retrollamada([3, 4, 5], funcion);


retrollamada([10, 20, 30], funcion2);