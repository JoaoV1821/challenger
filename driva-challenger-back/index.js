const express = require('express');
const router = require('./routes/routes');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

