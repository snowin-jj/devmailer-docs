---
sidebar_position: 1
---

## Live Demo:

> Replit: https://replit.com/@SnowinJ/devmailer-example?v=1

## Request URL

```
https://devmailer.vercel.app/api/sendmail?apikey=YOUR_API_KEY
```

## Responses

### Success

All ok. The mail has been successfully sent.

**Status:** 200 Ok

```json
{
  "message": "Mail sent"
}
```

### API KEY not found

This error occurs when you do not provide an API key.

**Status:** 401 Unauthorized

```json
{
  "error": "Not Authorized"
}
```

### Invalid key

This error occurs when you provide an invalid API key.

**Status:** 401 Unauthorized

```json
{
  "error": "Invalid key"
}
```

### Rate Limit

This error happens when your hourly request limit has been exceeded.

**Status:** 429 Too Many Request

```json
{
  "error": "Too Many Requests"
}
```

### Invalid payload

This error occurs when you do not provide the required values or provide invalid values.

**Status:** 400 Bad Request

```json
{
  "error": {
    "to": ["The field `to` is required"],
    "from": ["The field `from` is required"],
    "subject": ["The field `subject` is required"],
    "body": ["The field `body` is required"]
  }
}
```

### Something went wrong

This error occurs when something is wrong on the server.

**Status:** 500 Internal Server Error

```json
{ "error": "Something went wrong" },
```
