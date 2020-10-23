

const submitButton = document.querySelector('#convert')

function convertFarenheitToCelcius(farenheitTemp) {
  return (farenheitTemp - 32) * (5 / 9)
}

function convertCelciusToFarenheit(celciusTemp) {
  return (celciusTemp * (9 / 5)) + 32
}

function isChecked(idString) {
  return document.querySelector(idString).checked
}

document.querySelector('#temp-form').addEventListener('submit', function(e) {
  debugger
  
  // const input = document.querySelector('#temp-input')
  // const value = parseFloat(input.value)
  
  // let newValue = null
  // if (isChecked('#c-to-f')) {
  //   newValue = convertCelciusToFarenheit(value)
  // } else if (isChecked('#f-to-c')) {
  //   newValue = convertFarenheitToCelcius(value)
  // }
  
  // document.querySelector('#display-result').innerText = newValue
})

// document.querySelector('#clear').addEventListener('click', function() {
//   document.querySelector('#temp-input').value = ''
// })

function clearInput() {
  document.querySelector('#temp-input').value = ''  
}




