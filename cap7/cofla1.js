let width = window.screen.availWidth;
let height = window.screen.availHeight;

let buyed = confirm(`El ancho es ${width} y el alto es ${height}`);

if(buyed) {
    alert("Compra realizada exitosamente");
}
else {
    alert("Compra cancelada");
}