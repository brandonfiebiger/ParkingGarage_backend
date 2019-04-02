# ParkingGarage_backend

## Run project

* `Git clone` the repo
* install postgres if you havent already
* run`psql CREATE DATABASE state_of_parking_garage`
* run`npm install` from root directory
* run `knex seed:run` to seed the database.
* run`node server.js` and app should be running on localhost:5000

### GET

Get all spaces ```/api/v1/spaces```

Example Response:

```
[
    {
        "id": 360,
        "size": "large",
        "row": 7,
        "level": 2,
        "vehicle_id": null,
        "created_at": "2019-04-01T01:45:02.058Z",
        "updated_at": "2019-04-01T01:45:02.058Z"
    },
    {
        "id": 400,
        "size": "large",
        "row": 2,
        "level": 3,
        "vehicle_id": 59,
        "created_at": "2019-04-01T01:45:02.080Z",
        "updated_at": "2019-04-01T01:45:02.080Z"
    },
    {
        "id": 330,
        "size": "large",
        "row": 3,
        "level": 1,
        "vehicle_id": null,
        "created_at": "2019-04-01T01:45:02.043Z",
        "updated_at": "2019-04-01T01:45:02.043Z"
    }
]
```



