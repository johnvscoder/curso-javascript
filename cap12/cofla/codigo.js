const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Fisica 4",
        nota: 7
    },
    {
        nombre: "Calculo 3",
        nota: 8
    },
    {
        nombre: "Bases de datos 3",
        nota: 9
    },
    {
        nombre: "Matematicas discretas 2",
        nota: 8
    },
    {
        nombre: "Programacion 4",
        nota: 7
    }
];

const obtenerMateria = (id) => {
    return new Promise((resolve, reject) => {
        materia = materias[id];
        if(materia == undefined) reject("La materia no existe");
        else setTimeout(() => {resolve(materia)}, Math.random() * 400);
    });
}

const devolverMaterias = async () => {
    let materia = [];
    for(let i = 0; i < materias.length; i++) {
        // materias[i] = obtenerMateria(i);
        // materias[i].then((res) => {
        //     console.log(res);
        // });
        materia[i] = await obtenerMateria(i);
        console.log(materia[i]);
    }
}

devolverMaterias();