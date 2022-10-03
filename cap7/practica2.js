print();
alert("Esto es una alerta");
let resp = confirm("Esto es un confirm");
document.write(`Resultado del confirm: ${resp} <br>`);
resp = prompt("Esto es un prompt");
document.write(`Resultado del prompt: ${resp} <br>`);

resp = confirm("Desea aplicar window.stop() a la ventana abierta?");
let url = prompt("Ingrese una url");
let ventana = window.open(url);

if(resp) {
    ventana.stop();
    document.write("window.stop() aplicado a la ventana abiert <br>");
}
else {
    document.write("window.stop() <b>no</b> se aplico a la ventana abierta <br>");
}


document.write("Hola mundo<br>");