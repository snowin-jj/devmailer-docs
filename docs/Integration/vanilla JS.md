---
sdibar_position: 1
---

Integrating Dev Mailer with a simple form in vanilla JS.

## Select the form

```javascript
const emilForm = document.querySelector("#emailForm");
const API_KEY = YOUR_API_KEY;
```

## Form submit handler

Create a function that handles and makes a POST request to the api

```javascript
async function handleSubmit(e) {
  e.preventDefault();

  const form = new FormData(e.target);
  const formData = Object.fromEntries(form.entries());

  const options = {
    method: "POST",
    body: JSON.stringify(formData),
  };

  const res = await fetch(
    `https://devmailer.vercel.app/api/sendmail?apikey=${API_KEY}`,
    options
  );

  const jsonData = await res.json();
  console.log(jsonData);
}
```

Select the form and add an event listener to it

```javascript
emilForm.addEventListener("submit", handleSubmit);
```

## ⚠️ Note

Make sure the <strong>input field names</strong> match the fields that are required by the API (from, to, subject, body).
