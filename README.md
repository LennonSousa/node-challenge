## Description

Node Challenge.

The project consists of two separate services:

- A user-facing API that will receive requests from registered users asking for quote information.
- An internal stock service that queries external APIs to retrieve the requested quote information.

* Architecture

1. A user makes a request asking for Nasdaq's current Stock quote: GET /stock?q=ndq
2. The API service calls the stock service to retrieve the requested stock information
3. The stock service delegates the call to the external API, parses the response and returns the information back to the API service.
4. The API service saves the response from the stock service in the database.
5. The data is formatted and returned to the user.

## Installation

```bash
$ docker-compose up
```

## Running the app

```bash
# Node Challenge Api-servie
$ cd api-service
$ yarn start:dev
$ localhost:3000

# Node Challenge Stock-servie
$ cd stock-service
$ yarn start:dev
$ localhost:3001
```

## Collections

Insomnia collection
cd collections

```
cd collections
```
