---
sidebar_position: 1
---

### Live Demo: 
>Replit: https://replit.com/@SnowinJ/devmailer-example?v=1

### Request URL

```
https://devmailer.vercel.app/api/sendmail?apikey=YOUR_API_KEY
```

### Responses

**Status:** 200 Ok

```json
{
  "message": "mail has been sent",
  "data": {
    "accepted": [
      "user@test.com"
    ],
    "rejected": [],
    "envelopeTime": 169,
    "messageTime": 370,
    "messageSize": 347,
    "response": "250 2.0.0 OK  16728293766 a11-20020a05620a16cb00b006bb29d932e1sm221367966qkn.105 - gsmtp",
    "envelope": {
      "from": "service.devmailer@gmail.com",
      "to": [
        "user@test.com"
      ]
    },
    "messageId": "<d82a679b-c26f-a5c6-5acf-20f9381301b5d@test.com>"
  }
}
```

**Status:** 401 Unauthorized

```json
{
  "message": "Invalid key",
}
```