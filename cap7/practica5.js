let window2 = window.open("http://youtube.com", "", "width: 100, height=100");
//Nada de esto funciona. Se hace de otra forma
document.getElementById("b1").onclick = () => {
    window2.resizeBy(10, 30);
};

document.getElementById("b2").onclick = () => {
    window2.resizeTo(300, 300);
};

document.getElementById("b3").onclick = () => {
    window2.moveBy(10, 30);
};

document.getElementById("b4").onclick = () => {
    window2.moveTo(50, 100);
};