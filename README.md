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

Get all vehicles ```/api/v1/vehicles```

Example Response:

```
[
    {
        "id": 59,
        "size": "large",
        "created_at": "2019-04-01T19:42:29.547Z",
        "updated_at": "2019-04-01T19:42:29.547Z"
    },
    {
        "id": 61,
        "size": "large",
        "created_at": "2019-04-01T21:16:40.841Z",
        "updated_at": "2019-04-01T21:16:40.841Z"
    },
    {
        "id": 62,
        "size": "large",
        "created_at": "2019-04-01T21:17:02.958Z",
        "updated_at": "2019-04-01T21:17:02.958Z"
    }
]
```

### POST

Create a new vehicle ```/api/v1/vehicles```

Example Request:
```
{
   "size": "small"
}
```

Example Response:

```
{
    "id": 64
}
```

### PATCH

Add a vehicle to parking space```/api/v1/spaces/:id```

Example Request:
```
{
   "vehicle_id": 64
}
```

Example Response:

```
[
    {
        "id": 383,
        "size": "medium",
        "row": 10,
        "level": 3,
        "vehicle_id": 64,
        "created_at": "2019-04-01T01:45:02.072Z",
        "updated_at": "2019-04-01T01:45:02.072Z"
    }
]
```

### PUT

Remove vehicle from parking space```/api/v1/spaces/:id```

Example Request:
```
{
        "size": "medium",
        "row": 10,
        "level": 3,
        "vehicle_id": null
}
```

Example Response:

```
[
    {
        "id": 383,
        "size": "medium",
        "row": 10,
        "level": 3,
        "vehicle_id": null,
        "created_at": "2019-04-01T01:45:02.072Z",
        "updated_at": "2019-04-01T01:45:02.072Z"
    }
]
```

### DELETE

Remove vehicle from database```/api/v1/vehicles/:id```

Example Response:

```
success
```



















