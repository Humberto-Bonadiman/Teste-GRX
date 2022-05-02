const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const PORT = 3001;

const app = express();
app.use(bodyParser.json());

app.post('/collect', (req, res) => {
  const { Pergunta1 } = req.body;
  const { Pergunta2 } = req.body;
  const { Pergunta3 } = req.body;
  const { Pergunta4 } = req.body;

  const questionnaireAnswers = {
    Pergunta1: Pergunta1.substring(1,4),
    Pergunta2,
    Pergunta3,
    Pergunta4,
  };

  fs.writeFile('./questionnaireAnswers.json', JSON.stringify(questionnaireAnswers))
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });

  res.send(questionnaireAnswers);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});