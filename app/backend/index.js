const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3001;

const app = express();
app.use(bodyParser.json());
app.use(express.json());

const DataRoute = require('./routes/dataRoute');

app.use('/collect', DataRoute.router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});