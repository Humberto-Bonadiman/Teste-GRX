const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const PORT = 3001;

const app = express();
app.use(bodyParser.json());
app.use(express.json());

const createRoute = require('./routes/createRoute');

const arquivoJson = './questionnaireAnswers.json';

app.use('/collect', createRoute.router);

app.get('/collect', (_req, res) => {
  fs.readFile(arquivoJson, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
    res.send(data);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${arquivoJson}\n Erro: ${err}`);
    process.exit(1);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});