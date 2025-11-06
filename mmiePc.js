const scriptURL = 'https://script.google.com/macros/s/AKfycbycEQ6dw88fprhCrFxqq4yUj88ucfr0UHs-cK1rMdPXnERNTOhvhnuttEt4VjPu8y36/exec'

const form = document.forms['pc-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})