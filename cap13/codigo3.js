window.addEventListener("keydown", (e) => {
    if(e.key == "q")
        // fun();
        fun2();
});

async function fun() {
    // const request = await fetch("fondo.jpg");
    // const response = await request.text();
    // const response = await request.json();
    // const response = await request.blob();
    const response = await axios("data.json");
    console.log(typeof response);
    console.log(response);
    // document.querySelector("img").src = URL.createObjectURL(response);
}

async function fun2() {
    // const request = await fetch("https://reqres.in/api/users", {
    //     method: "POST",
    //     body: JSON.stringify({
    //         name: "John Villanueva",
    //         job: "Developer"
    //     }),
    //     headers: {
    //         "Content-type": "application/json"
    //     }
    // });
    // const response = await request.text();
    // console.log(typeof response);
    // console.log(response);

    // const response = await axios.post("https://reqres.in/api/users", {
    //     name: "John Villanueva",
    //     job: "Developer"
    // });
    const response = await axios("https://reqres.in/api/users", {
        method: "post",
        data: {
            name: "John Villanueva",
            job: "Developer"
        }
    });
    console.log(typeof response);
    console.log(response);
    console.log(response.data);
}