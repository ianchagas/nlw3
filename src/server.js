//Importando express
const express = require('express');
const path = require('path'); // importando biblioteca node para trabalhar barra e contra barra... Roda em qualquer S.O
const pages = require('./pages.js');


//Iniciando express
const server = express();



server

    // utilizando body do req
    .use(express.urlencoded({ extended: true }))

    //utilizando arquivos estáticos
    .use(express.static('public'))

    //configurar template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    // Criando rotas da aplicação
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//Ativar servidor
server.listen(5500)