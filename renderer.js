const information = document.getElementById('info');

information.innerText = `This app is using Chrome (${versions.chrome()}), Node.js v(${versions.node()}) e Electron (v${versions.electron()}))`;
