const Express = require('express');
const router = require('./routes/routes');
const app = Express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Funciona!");
});

app.use(Express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

