const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const { getCountryData } = require('./controllers/infoController.js');

app.use(
  express.json(),
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  })
);

app.get('/info/:pais', getCountryData);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
