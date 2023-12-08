// GET request
fetch('https://reqres.in/api/users?page=2')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// // POST request
fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      "name": "morpheus",
      "job": "leader"
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

// // PUT request
fetch('https://reqres.in/api/users/2', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      "name": "morpheus",
      "job": "zion resident"
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// // DELETE request
fetch('https://reqres.in/api/posts/1', 
  { method: 'DELETE' })
  .then((data) => console.log("Apagado com sucesso!"))
  .catch(error => console.error('Errosss:', error));