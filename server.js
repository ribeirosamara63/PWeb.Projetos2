const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Rotas da Navbar
app.get('/', (req, res) => res.render('index'));
app.get('/sobre', (req, res) => res.render('sobre'));
app.get('/circulo-cromatico', (req, res) => res.render('circulo-cromatico'));

// Rotas dos Quadrados (Aplicações da Colorimetria)
app.get('/roupas', (req, res) => res.render('roupas'));
app.get('/make', (req, res) => res.render('make'));
app.get('/cabelo', (req, res) => res.render('cabelo'));
app.get('/arquitetura', (req, res) => res.render('arquitetura'));
app.get('/arte', (req, res) => res.render('arte'));
app.get('/cinema', (req, res) => res.render('cinema'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em: http://localhost:${PORT}`));