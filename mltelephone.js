const scriptURL = 'https://script.google.com/macros/s/AKfycbye6sSQoYlGkeAv5Ert-bzH7bCZeMmd8GkSP6eQHYOKNq1CriizVegqQfs88Gr_xOd7/exec'
const form = document.forms['telephone-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})