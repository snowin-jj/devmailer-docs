---
sidebar_position: 4
---

Send mail by providing the required parameters.

## End point

```
https://devmailer.vercel.app/api
```

## Send mail

Send a mail

```Request
POST /sendmail
```

#### Parameters

- Query Parameter
    
    | param   | Description         | Required |
    | ------- | ------------------- | -------- |
    | apikey  | Your Api Key        | true     |

- Body

    | param   | Description         | Required |
    | ------- | ------------------- | -------- |
    | from    | Sender name         | true     |
    | to      | Recevier email ID   | true     |
    | subject | Subject of the mail | true     |
    | body    | Body of the mail    | true     |


## <span>⚠️</span>Note: 
Body can be <i><u>html</u></i>
