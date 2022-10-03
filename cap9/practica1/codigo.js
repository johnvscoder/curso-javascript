// Obsoleto
// const funcion = () => {
//     alert("adios");
// }

// let boton = document.getElementById("boton");
// boton.onclick = funcion;


// Correcto
// const fun = () => {
//     alert("adios");
// }

// let boton = document.getElementById("boton");
// boton.addEventListener("click", fun);

// let boton = document.getElementById("boton");
// boton.addEventListener("click", (e) => {
//     console.log(e);
// });

// document.getElementById("div1").addEventListener("click", () => {
//     alert("div1");
// }, true);

// document.getElementById("div2").addEventListener("click", (e) => {
//     alert("div2");
//     e.stopPropagation();
// }, true);

// document.getElementById("div3").addEventListener("click", (e) => {
//     alert("div3");
// });

// document.getElementById("div3").addEventListener("dblclick", (e) => {
//     alert("doble clic en div3");
// });

// document.getElementById("div1").addEventListener("mouseover", (e) => {
//     alert("mouse over en div1");
// });

// document.getElementById("div1").addEventListener("mouseout", (e) => {
//     alert("mouse out en div1");
// });

// document.getElementById("div3").addEventListener("mouseenter", (e) => {
//     alert("mouse enter en div3");
// });

// document.getElementById("div3").addEventListener("mouseleave", (e) => {
//     alert("mouse leave en div3");
// });

// document.getElementById("div1").addEventListener("mousedown", (e) => {
//     alert("mouse down en div1");
//     console.log(e);
// });

// document.getElementById("div1").addEventListener("mouseup", (e) => {
//     alert("mouseup en div1");
//     console.log(e);
// });


// document.getElementById("div1").addEventListener("contextmenu", (e) => {
//     alert("contextmenu en div1");
//     console.log(e);
// });

// document.getElementById("div1").addEventListener("mousemove", (e) => {
//     // alert("mousemove en div1");
//     console.log('a');
//     // console.log(e);
// });


// document.getElementById("div1").addEventListener("click", (e) => {
//     alert("mouseclick en div1");
//     console.log(e);
// });

// window.addEventListener("keydown", (e) => {
//      alert("keydown en window " + e.key);

//     console.log(e);
// });

// window.addEventListener("keyup", (e) => {
//     alert("keyup en window " + e.key);
//     console.log(e);
// });

// window.addEventListener("keypress", (e) => {
//     alert("keypress en window " + e.key);
//     console.log(e);
// });

// let img = document.querySelector("img");
// img.addEventListener("error", () => {
//     alert("la imagen no se pudo cargar");
// })

// addEventListener("load", () => {
//     alert("load ejecutado");
// })

// const beforeUnloadListener = (event) => {
//     event.preventDefault();
//     return event.returnValue = "Are you sure you want to exit?";
// };

// const nameInput = document.querySelector("#name");

// nameInput.addEventListener("input", (event) => {
//     if (event.target.value !== "") {
//         addEventListener("beforeunload", beforeUnloadListener, { capture: true });
//     } else {
//         removeEventListener("beforeunload", beforeUnloadListener, { capture: true });
//     }
// });


// addEventListener("beforeunload", (e) => {
//     let a = Math.cos(1);
//     console.log("hola" + a);
//     return e.returnValue = "Salir?";
// });

const anchoSpan = document.querySelector("#ancho");

const altoSpan = document.querySelector("#alto");

addEventListener("resize", () => {
    anchoSpan.textContent = window.innerWidth;
    altoSpan.textContent = window.innerHeight;
});

const scrollX = document.querySelector("#scroll-x");

const scrollY = document.querySelector("#scroll-y");

document.addEventListener("scroll", () => {
    scrollX.textContent = window.scrollX;
    scrollY.textContent = window.scrollY;
});

const pSelect = document.querySelector("#select");
const inputSelect = document.querySelector("#input-select");
inputSelect.addEventListener("select", (e) => {
    pSelect.textContent = `
    ${e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)} 
    `;
});