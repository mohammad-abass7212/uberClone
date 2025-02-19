# User Registration Endpoint

## Endpoint

`POST /users/register`

## Description

This endpoint allows a new user to register by providing their first name, last name, email, and password.

## Request

### Headers

- `Content-Type: application/json`

### Body

```json
{
  "fullName": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Response

### Success (201 Created)

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullName": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

### Error (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "Invalid email format",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "First name is required and must be at least 3 characters",
      "param": "fullName.firstname",
      "location": "body"
    }
  ]
}
```

### Error (500 Internal Server Error)

```json
{
  "error": "error_message_here"
}
```

# User Login Endpoint

## Endpoint

`POST /users/login`

## Description

This endpoint allows an existing user to log in by providing their email and password.

## Request

### Headers

- `Content-Type: application/json`

### Body

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Response

### Success (200 OK)

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullName": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

### Error (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "Invalid email format",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Error (401 Unauthorized)

```json
{
  "error": "Invalid email or password"
}
```

### Error (500 Internal Server Error)

```json
{
  "error": "error_message_here"
}
```
