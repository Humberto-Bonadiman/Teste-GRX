const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const PORT = 3001;

const app = express();
app.use(bodyParser.json());

const arquivoJson = './questionnaireAnswers.json';

app.post('/collect', (req, res) => {
  const { Pergunta1 } = req.body;
  const { Pergunta2 } = req.body;
  const { Pergunta3 } = req.body;
  const { Pergunta4 } = req.body;
  let QuantidadePositiva = 0;
  let QuantidadeNegativa = 0;
  let QuantidadeNaoAvaliada = 0;

  const questionnaireAnswers = {
    Pergunta1: Pergunta1.substring(1,4),
    Pergunta2,
    Pergunta3,
    Pergunta4,
  };

  const arrayAnswers = Object.values(questionnaireAnswers);

  arrayAnswers.forEach((answer) => {
    if (answer === 'Sim') QuantidadePositiva += 1;
    if (answer === 'Não') QuantidadeNegativa += 1;
    if (answer === 'Não Sei') QuantidadeNaoAvaliada += 1;
    if (answer === 'Agora!!') QuantidadePositiva += 2;
  });

  questionnaireAnswers.QuantidadePositiva = QuantidadePositiva;
  questionnaireAnswers.QuantidadeNegativa = QuantidadeNegativa;
  questionnaireAnswers.QuantidadeNaoAvaliada = QuantidadeNaoAvaliada;

  fs.writeFile(arquivoJson, JSON.stringify(questionnaireAnswers))
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });

  res.send(questionnaireAnswers);
});

app.get('/collect', (_req, res) => {
  fs.readFile(arquivoJson, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
    res.send(data);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${arquivoJson}\n Erro: ${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});