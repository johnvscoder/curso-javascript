const sendButton = document.getElementById("snd-nota");

sendButton.addEventListener("click", () => {
    let resultado, mensaje;
    try {
        resultadoPrev = parseInt(document.getElementById("nota").value);
        if(isNaN(resultadoPrev))
            throw "Gracioso";
        mensaje = definirMensaje(resultadoPrev);
        resultado = verificarAprobacion(resultadoPrev, 8, 6);
    } catch(e) {
        resultado = "Sos gracioso?";
        mensaje = "He descubierto que intentaste hackear el sitio";
    }
    abrirModal(resultado, mensaje);
});

const definirMensaje = (resultadoPrev) => {
    switch(resultadoPrev) {
        case 1: return "No puedes ser tan HDP";
        case 2: return "Malisimo";
        case 3: return "Muy mal";
        case 4: return "Mal";
        case 5: return "Mal";
        case 6: return "Regular";
        case 7: return "Bien, pero puede mejorar";
        case 8: return "Muy bien";
        case 9: return "excelente";
        case 10: return "Insuperable";
        default: return null;
    }
};

const verificarAprobacion = (resultadoPrev, nota1, nota2) => {
    let promedio = (resultadoPrev + nota1 + nota2) / 3;
    if(promedio >= 7)
        return "<span class='green'>Aprobado</span>";
    else
        return "<span class='red'>Reprobado</span>";
};

const abrirModal = (res, msg) => {
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = "Tu prueba: " + msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";

    setTimeout(() => {
        window.addEventListener("click", listener);
    }, 100);
    
};

const listener = () => {
    console.log("listener");
    let modal = document.querySelector(".modal-background");
    modal.style.display = "none";
    //modal.opacity = "0";
    window.removeEventListener("click", listener);
}