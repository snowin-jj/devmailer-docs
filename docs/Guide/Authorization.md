---
sidebar_position: 2
---

### Public Authorization

Most actions can be performed without requiring authentication from a specific user. For example, fetching, or sending a mail does not require a user to log in.

To authenticate requests in this way, pass your application’s access key via the query parameter:

```
https://devmailer.vercel.app/api/sendmail?apikey=YOUR_API_KEY
```

### <span>⚠️</span> Note:

Keep your API key with you safely. You can access the API only through API key
