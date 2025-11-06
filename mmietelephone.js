const scriptURL = 'https://script.google.com/macros/s/AKfycbw9-1dToyxYVG6bkWPA2MwPiYTIIWz5j4cmRRSWu6TAxPBfUS2JgHUQDo6wyi-2bv6d/exec'
const form = document.forms['telephone-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})