setTimeout(() => {
    console.log("hola " + Math.cos(1));
}, 3000);

let id = setTimeout(() => {
    console.log("hola " + Math.cos(1));
}, 5000);

clearTimeout(id);

let id2 = setInterval(() => {
    document.write("hola<br>");
}, 1000);

setTimeout(() => {
    clearInterval(id2);
}, 5500);