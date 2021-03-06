const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Get all of the parking spaces in the database
app.get('/api/v1/spaces', (request, response) => {
  database('spaces').select()
    .then((spaces) => {
      response.status(200).json(spaces);
    })
    .catch(error => {
      response.status(500).json({error});
    });
});

//Get all of the vehicles in the database
app.get('/api/v1/vehicles', (request, response) => {
  database('vehicles').select()
    .then((vehicles) => {
      response.status(200).json(vehicles);
    })
    .catch(error => {
      response.status(500).json({error});
    });
});

//Add a new vehicle object to the database
app.post('/api/v1/vehicles', (request, response) => {
  const vehicle = request.body;

  for (let requiredParameter of ['size']) {
    if (!vehicle[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `You're missing a "${requiredParameter}" property.`});
    }
  }

  database('vehicles').insert(vehicle, 'id')
    .then(vehicle => {
      response.status(201).json({ id: vehicle[0]});
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

//Update space with a newly parked vehicle_id
app.patch('/api/v1/spaces/:id', (request, response) => {

  const space = request.body;

  for (let requiredParameter of ['vehicle_id']) {
    if (!space[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `You're missing a "${requiredParameter}" property.`});
    }
  }

  database('spaces').where({ id: request.params.id }).update(request.body).returning('*').then((space) => {
    response.status(200).json(space);
  })
  .catch(error => {
    response.status(500).json({ error });
  })
})


//Remove a vehicle from a parking space by setting the vehicle id to null
app.put('/api/v1/spaces/:id', (request, response) => {

  const space = request.body;

  for (let requiredParameter of ['size', 'row', 'level']) {
    if (!space[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `You're missing a "${requiredParameter}" property.`});
    }
  }

  database('spaces').where({ id: request.params.id }).update(request.body).returning('*').then((space) => {
    response.status(200).json(space);
  })
  .catch(error => {
    response.status(500).json({ error });
  });
});

//delete vehicle from database
app.delete('/api/v1/vehicles/:id', (request, response) => {
  database('vehicles')
  .select()
  .where('id', request.params.id)
  .del()
  .then(() => {
    return response.status(202).json('success');
  })
  .catch(error => {
    return response.status(500).send({ error });
  })
})

app.listen(5000, () => {
  console.log('app is listening on port 5000');
});

module.exports = app;