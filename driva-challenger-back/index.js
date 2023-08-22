const Express = require('express');
const router = require('./routes/routes');
const cors = require('cors');

const app = Express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Funciona!");
});


app.use(cors());
app.use(Express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

