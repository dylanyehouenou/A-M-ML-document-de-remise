const scriptURL = 'https://script.google.com/macros/s/AKfycbzQw-fAGdJ4zmFwLqztFBtQS0-rdihG-H4kCW7wjcszcmyoAgVe-6YRSg03mT_KGlY0/exec'
const form = document.forms['pc-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})