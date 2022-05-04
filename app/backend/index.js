const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3003;

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const DataRoute = require('./routes/dataRoute');

app.use('/collect', DataRoute.router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});