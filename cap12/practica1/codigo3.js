// const promesaPrimo = new Promise((resolve, reject) => {
//     let esPrimo = true;

//     let input = document.getElementById("numero");
//     input.value = "10";

//     let primo = parseInt(input.value);
//     console.log("el valor es " + primo);
//     //Para hacer que la ejecucion se tarde
//     for(let i = 0; i < 1000000000; i++) {
//         let j = 10;
//     }
//     for(let i = 2; i < primo; i++) {
//         if(primo % i == 0) {
//             esPrimo = false;
//             break;
//         }
//     }
//     if(esPrimo)
//         resolve("Es primo");
//     else
//         reject("No es primo");
//         console.log("el valor es " + primo);
// });


// const funcion = () => {
//     let esPrimo = true;

//     let primo = parseInt(document.getElementById("numero").value);
//     Para hacer que la ejecucion se tarde
//     for(let i = 0; i < 1000000000; i++) {
//         let j = 10;
//     }
//     for(let i = 2; i < primo; i++) {
//         if(primo % i == 0) {
//             esPrimo = false;
//             break;
//         }
//     }
//     if(esPrimo)
//         return "Si es primo 2";
//     else
//         return "No es primo 2";
// };

const funcion2 = (resolve, reject) => {
    let esPrimo = true;

    let input = document.getElementById("numero");

    let primo = parseInt(input.value);
    //Para hacer que la ejecucion se tarde
    for(let i = 0; i < 1000000000; i++) {
        let j = 10;
    }
    for(let i = 2; i < primo; i++) {
        if(primo % i == 0) {
            esPrimo = false;
            break;
        }
    }
    if(esPrimo)
        resolve("Es primo");
    else
        reject("No es primo");
};

document.getElementById("button").addEventListener("click", () => {
    new Promise((resolve, reject) => {
        let esPrimo = true;
    
        let input = document.getElementById("numero");
    
        let primo = parseInt(input.value);
        //Para hacer que la ejecucion se tarde
        for(let i = 0; i < 1000000000; i++) {
            let j = 10;
        }
        for(let i = 2; i < primo; i++) {
            if(primo % i == 0) {
                esPrimo = false;
                break;
            }
        }
        if(esPrimo)
            resolve("Es primo 1");
        else
            reject("No es primo 1");
    })
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.log(e);
    })
    ;
    console.log("Hola 2");
});
