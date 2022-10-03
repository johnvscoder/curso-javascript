let pantalla = window.screen;
console.log(pantalla);

document.write(`availWidth: ${pantalla.availWidth}, availHeight: ${pantalla.availHeight}<br>`);
document.write(`width: ${pantalla.width}, height: ${pantalla.height}<br>`);
document.write(`screenLeft: ${screenLeft}, screenTop: ${screenTop}<br><br>`);

let div = document.getElementById("div");
div.onclick = () => {
    div.textContent = `scrollX: ${scrollX}, scrollY: ${scrollY}`;
};