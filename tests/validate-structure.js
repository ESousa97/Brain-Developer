const fs = require('fs');
const path = require('path');

const requiredFiles = [
    'index.html',
    'styles/tokens.css',
    'styles/base.css',
    'styles/layout.css',
    'styles/components.css',
    'styles/utilities.css',
    'styles/pages/home.css',
    'pages/Start/Start.html',
    'pages/Front-End/Front-End.html',
    'pages/Back-End/Back-End.html',
];

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(__dirname, '..', file)));

if (missing.length > 0) {
    console.error('Arquivos obrigatórios ausentes:', missing);
    process.exit(1);
}

console.log('Estrutura mínima validada com sucesso.');
