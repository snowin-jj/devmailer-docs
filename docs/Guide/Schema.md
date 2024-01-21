---
sidebar_position: 1
---

## Location

You can access API at https://devmailer.vercel.app/api

## Summary objects

When retrieving a list of objects, an abbreviated or summary version of that object is returned - i.e., a subset of its attributes. To get a full detailed version of that object, fetch it individually.

## HTTP Verbs

The DevMailer API uses HTTP verbs appropriate to each action.

| Verbs  | Description          |
| ------ | -------------------- |
| GET    | Retrieving resources |
| POST   | Creating resources   |
| PUT    | Updating resources   |
| DELETE | Deleting resources   |

## Error

If an error occurs, whether on the server or client side, the error message(s) will be returned in as object. For example:

> Status Code: 400

```JSON
    {
        "message": "Payload is empty. Please you have provide the required fields correctly!",
    }
```

| Common Status Codes | Description                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| 200 - OK            | Everything worked as expected                                           |
| 400 - Bad Request   | The request was unacceptable, often due to missing a required parameter |
| 401 - Unauthorized  | Invalid Access Token                                                    |
| 403 - Forbidden     | Missing permissions to perform request                                  |
| 404 - Not Found     | The requested resource doesn’t exist                                    |
| 500, 503            | Something went wrong on server                                          |
