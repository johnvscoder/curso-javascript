// const request = new XMLHttpRequest();
// const request = new ActiveXObject("Microsoft.XMLHTTP");
request.addEventListener("readystatechange", () => {
	
		console.log(request);

});

// request.addEventListener("load", () => {

// 		console.log(request);

// });
request.open("GET", "data.json");
request.send();

// const request = new XMLHttpRequest();
// // request.addEventListener("readystatechange", (e) => {
// // 	console.log(e);
// // 	console.log(request);
// // 	console.log(request.responseText);
// // });
// request.addEventListener("load", (e) => {
// 	console.log(e);
// 	console.log(request);
// 	console.log(request.responseText);
// });
// request.open("POST", "https://reqres.in/api/users");
// request.setRequestHeader("Content-type", "application/json;charset=UTF8");
// request.send(JSON.stringify(
// 	{
// 		"name": "John",
// 		"job": "Developer"
// 	}
// ));