const express = require('express');
const app = express();
app.disable('x-powered-by');
const path = require('path');
app.use(express.static(path.join(__dirname, 'views/pages')));
// ejs motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) =>{
    res.render('pages/planetas');
    console.log('pagina cargada');
});

const port = Number(process.env.PORT || 4500);
const host = process.env.HOST || '127.0.0.1';
if (require.main === module) {
    app.listen(port, host, function () {
        console.log(`Servidor escuchando en ${host}:${port}`);
    });
}

app.get('/mercurio', (req, res) =>{
    res.render('pages/mercurio');
    console.log('pagina cargada');
});

app.get('/venus', (req, res) =>{
    res.render('pages/venus');
    console.log('pagina cargada');
});

app.get('/tierra', (req, res) =>{
    res.render('pages/tierra');
    console.log('pagina cargada');
});

app.get('/marte', (req, res) =>{
    res.render('pages/marte');
    console.log('pagina cargada');
});

app.get('/jupiter', (req, res) =>{
    res.render('pages/jupiter');
    console.log('pagina cargada');
});

app.get('/saturno', (req, res) =>{
    res.render('pages/saturno');
    console.log('pagina cargada');
});

app.get('/urano', (req, res) =>{
    res.render('pages/urano');
    console.log('pagina cargada');
});

app.get('/neptuno', (req, res) =>{
    res.render('pages/neptuno');
    console.log('pagina cargada');
});
module.exports = app;
