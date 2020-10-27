const submitButton = document.querySelector('#convert')

function convertFarenheitToCelcius(farenheitTemp) {
  return (farenheitTemp - 32) * (5 / 9)
}

function convertCelciusToFarenheit(celciusTemp) {
  return (celciusTemp * (9 / 5)) + 32
}

function colorizeDisplay(temp, units) {
  const display = document.querySelector('#display-result')

  if (units === 'c-to-f') {
    if (temp > 212) {
      display.style.background = 'red'
      display.style.color = 'white'
    } else if (temp < 32) {
      display.style.background = 'blue'
      display.style.color = 'white'
    } else {
      display.style.background = ''
      display.style.color = ''
    }
  }

  if (units === 'f-to-c') {
    if (temp > 100) {
      display.style.background = 'red'
      display.style.color = 'white'
    } else if (temp < 0) {
      display.style.background = 'blue'
      display.style.color = 'white'
    } else {
      display.style.background = ''
      display.style.color = ''
    }
  }
}

document.querySelector('#temp-form').addEventListener('submit', function(e) {
  e.preventDefault()
  
  const formData = new FormData(e.target)
  const temp = parseFloat(formData.get('temp'))
  const units = formData.get('units')

  let newValue = null
  const display = document.querySelector('#display-result')
  if (units === 'c-to-f') {
    newValue = convertCelciusToFarenheit(temp)
    display.innerText = `${newValue} ${String.fromCharCode(176)}F`
  } else if (units === 'f-to-c') {
    newValue = convertFarenheitToCelcius(temp)
    display.innerText = `${newValue} ${String.fromCharCode(176)}C`
  }

  colorizeDisplay(temp, units)
})

function clearInput() {
  document.querySelector('#temp-input').value = ''  
}

document.querySelector('#clear').addEventListener('click', function() {
  document.querySelector('#temp-input').value = ''
  document.querySelector('#display-result').innerText = ''
})
