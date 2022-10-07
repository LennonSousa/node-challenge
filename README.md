## Description

**Node Challenge.**

### The project consists of two separate services:

- A user-facing API that will receive requests from registered users asking for quote information.
- An internal stock service that queries external APIs to retrieve the requested quote information.

### Architecture

- A user makes a request asking for Nasdaq's current Stock quote: GET /stock?q=ndq
- The API service calls the stock service to retrieve the requested stock information
- The stock service delegates the call to the external API, parses the response and returns the information back to the API service.
- The API service saves the response from the stock service in the database.
- The data is formatted and returned to the user.

### Technologies

- This project uses Nest.Js as main framework.
- ORM: this project uses Prisma.io
- Test: Jest
- Database: PostgreSql
- Design Principles: SOLID

## Installation and run

```bash
$ docker-compose up
```

### First use

When the api-service runs for the first time,
an user is created:

```json
{
  "id": "cf383ce9-729d-4a80-9cf2-6c140c3e7450",
  "name": "First User",
  "email": "first@user.com",
  "password": "88a04f6ec43b1dd118f84a436591c13b4b0a6e26",
  "role": "ADMIN",
  "createdAt": "2022-10-07T02:56:05.879Z",
  "updatedAt": "2022-10-07T02:56:05.879Z"
}
```

So, you can authenticate:

```http
  POST /register
```

| Parameter  | type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `username` | `string` | **Required**. User e-mail   |
| `password` | `string` | **Required**. User password |

#### Body

```json
{
  "username": "first@user.com",
  "password": "88a04f6ec43b1dd118f84a436591c13b4b0a6e26"
}
```

#### Response

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpcnN0QHVzZXIuY29tIiwiaWQiOiJ..."
}
```

## Or running individual app

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
