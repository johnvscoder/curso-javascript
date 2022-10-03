let url = prompt("Ingrese una url:");
let ventana = window.open(url);

let resp = confirm("Desea cerrar la ventana?");

if(resp) {
    ventana.close();
    document.write(`Ventana cerrada: ${ventana.closed}`);
}
else {
    document.write(`Ventana no cerrada: ${ventana.closed}`);
}