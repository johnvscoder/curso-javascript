window.addEventListener("keydown", (e) => {
    if(e.key == "q")
        // get();
        post();
})

// function get() {
//     fetch("fondo.jpg")
//     .then((res) => {
//         console.log(res);
//         // return res.text();
//         // return res.json();
//         return res.blob();
//     }).then((res) => {
//         console.log(res);
//         const img = document.querySelector("img");
//         img.src = URL.createObjectURL(res);
//     });
// }

// function post() {
//     fetch("https://reqres.in/api/users", {
//         method: "POST",
//         body: JSON.stringify({
//             "nombre": "John",
//             "edad": 23
//         }),
//         headers: {
//             "Content-type": "application/json"
//         }
//     })
//     .then((res) => {
//         console.log(res);
//         // return res.text();
//         return res.json();
//         // return res.blob();
//     }).then((res) => {
//         console.log(res);
//     });
// }

function get() {
    axios("data.json")
    // axios.get("data.json")
    .then((res) => {
        console.log(res);
        console.log(res.data);
    });
}

function post() {
    // axios.post("https://reqres.in/api/users", {
    //     name: "John",
    //     job: "Dev"
    // })
    axios("https://reqres.in/api/users", {
        method: "post",
        data: {
            name: "John",
            job: "Dev"
        }
    })
    .then((res) => {
        console.log(res);
        console.log(res.data);
    });
}