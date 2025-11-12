const scriptURL = 'https://script.google.com/macros/s/AKfycbwfrRg2TPoBiAENAmBdWxuJw0Sxf2WKTUmqr0BfJ2z51WuR5qaXDyxKLC9KFRuqKpBe/exec'

const form = document.forms['pc-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})