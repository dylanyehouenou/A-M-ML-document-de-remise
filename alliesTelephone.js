const scriptURL = 'https://script.google.com/macros/s/AKfycbxDFeGyd0809tmAXsv6LPyKNop8TydJdfHW25iGZPjMTHJaNzX6R106uzJzjvtaq9tk/exec'
const form = document.forms['telephone-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})