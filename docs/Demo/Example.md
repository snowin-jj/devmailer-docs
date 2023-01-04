---
sidebar_position: 1
---

Let's see an example

**POST** mail

#### Request URL

```
https://devmailer.vercel.app/api/sendmail?apikey=j2hvs2@sh2872092ue12seQ3
```

#### Response

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
