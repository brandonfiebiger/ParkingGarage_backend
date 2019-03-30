const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/api/v1/spaces', (request, response) => {
  database('spaces').select()
    .then((spaces) => {
      response.status(200).json(spaces);
    })
    .catch(error => {
      response.status(500).json({error});
    });
})


app.listen(5000, () => {
  console.log('app is listening on port 5000');
})