let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;
let url = window.location.href;

let html = `pathname: <b>${pathname}</b><br>`;
html += `hostname: <b>${hostname}</b><br>`;
html += `protocol: <b>${protocol}</b><br>`;
html += `url: <b>${url}</b><br>`;

document.write(html);