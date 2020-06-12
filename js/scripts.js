function robogerize(num, name, order) {
  let outputArr = [];
  if (order === 'ascending') {
    if (num > 0) {
      for (let i = 0; i <= num; i++) {
        outputArr.push(evaluateNumber(i.toString(), name));
      }
    } else {
      for (let i = num; i <= 0; i++) {
        outputArr.push(evaluateNumber(i.toString(), name));
      }
    }
  } else if (order === 'descending') {
    if (num > 0) {
      for (let i = num; i >= 0; i--) {
        outputArr.push(evaluateNumber(i.toString(), name));
      }
    } else {
      for (let i = 0; i >= num; i--) {
        outputArr.push(evaluateNumber(i.toString(), name));
      }
    }
  }
  displayResults(outputArr);
}

function evaluateNumber(number, name) {
  if (number.includes('3')) {
    return `Won\'t you be my neighbor, ${name}?`;
  } else if (number.includes('2')) {
    return 'Boop!';
  } else if (number.includes('1')) {
    return 'Beep!';
  } else return number;
}

function displayResults(outputArr) {
  const outputDiv = document.getElementById('output');
  outputArr.forEach((item) => {
    const outputNode = document.createElement('p');
    outputNode.textContent = item;
    outputDiv.appendChild(outputNode);
  });
}

function formHandler(event) {
  document.getElementById('output').innerHTML = '';
  const numField = document.getElementById('num-input');
  const nameField = document.getElementById('name');
  
  const num = parseInt(numField.value);
  const name = nameField.value;
  const order = event.target.id;
  console.log(order)
  
  if (num && name) {
    numField.classList = 'form-control';
    nameField.classList = 'form-control';
    document.getElementById('loader').hidden = false;
    setTimeout(() => {
      document.getElementById('loader').hidden = true;
      robogerize(num, name, order);
    }, 4000);
  } else if (!num || !name) {
    alert('Please fill out the fields!');
    if (!num) {
      numField.classList = 'form-control is-invalid';
    } else if (!name) {
      numField.classList = 'form-control';
      nameField.classList = 'form-control is-invalid';
    }
  }

}

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    formHandler(event);
  })
});
