let numero = 9;

const promesa = new Promise((resolve, reject) => {
    if(numero % 2 == 1)
        reject({error: "El numero no es par. error"});
    else
        resolve({mensaje: "El numero es exitosamente par"});
    console.log("holahola");
});

promesa.then((res) => {
    console.log(res);
})
.catch((error) => {
    console.log(error);
})