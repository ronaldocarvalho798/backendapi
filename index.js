const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Adicione esta linha

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
app.use(cors()); // Adicione esta linha
const port = process.env.PORT || 3000;

const usuario = process.env.USUARIO;
const senha = process.env.SENHA;

app.get('/login', (req, res) => {
  res.json({ usuario, senha });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});