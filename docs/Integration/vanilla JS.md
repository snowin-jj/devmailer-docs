---
sdibar_position: 1
---

**Integrating Dev Mailer with a simple form in vanilla JS.**

```javascript
const emilForm = document.querySelector('#emailForm')
const API_KEY = YOUR_API_KEY
```

## Create a function that handles and makes a POST request to the api

```javascript
async function handleSubmit(e) {
	e.preventDefault()

	const form = new FormData(e.target);
	const formData = Object.fromEntries(form.entries());


	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formData)
	}

	const res = await fetch(`https://devmailer.vercel.app/api/sendmail?apikey=${API_KEY}`, options)

	const jsonData = await res.json()
	console.log(jsonData)
}
```

## Select the form and add an event listener to it

```javascript
emilForm.addEventListener('submit', handleSubmit)
```

**<span>⚠️</span> Note:**
Make sure the input field names match the fields that are required by the API (from, to, subject, body).

> Live Demo: https://replit.com/@SnowinJ/devmailer-example?v=1