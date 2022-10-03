document.write(`
href: ${window.location.href}<br>
protocol: ${window.location.protocol}<br>
hostname: ${window.location.hostname}<br>
pathname: ${window.location.pathname}<br>
`);

document.getElementById("b1").onclick = () => {
    window.location.assign("https://youtube.com");
};