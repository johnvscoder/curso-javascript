let alumnos = [
    {
        nombre: "Lucas Dalto",
        email: "soydalto@gmail.com",
        materia: "Fisica 3"
    },
    {
        nombre: "Karin Guerra",
        email: "karin@gmail.com",
        materia: "Fisica 1"
    },
    {
        nombre: "Jorge Ramirez",
        email: "ramirez@gmail.com",
        materia: "Calculo 2"
    },
    {
        nombre: "Facundo Roberto",
        email: "robert@gmail.com",
        materia: "Literatura"
    },
    {
        nombre: "Coffla XD",
        email: "coffla@gmail.com",
        materia: "Recreo"
    }
];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

let htmlCode = "";

for(alumno in alumnos) {
    let dato = alumnos[alumno];
    let nombre = dato["nombre"];
    let email = dato["email"];
    let materia = dato["materia"];
    htmlCode += `<div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`;
}

contenedor.innerHTML = htmlCode;

boton.addEventListener("click", () => {
    let confirmar = confirm("Realmente quieres confirma las mesas?");
    if(confirmar) {
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for(elemento in elementos) {
            let semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
});