document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    formHandler(event);
  });
});

function formHandler(event) {
  const numField = document.getElementById('num-input');
  const nameField = document.getElementById('name');
  const num = parseInt(numField.value);
  const name = nameField.value.trim();
  const order = event.target.id;
  const validated = validate(num, numField, name, nameField);

  document.getElementById('output').innerHTML = '';

  if (validated) {
    document.getElementById('loader').hidden = false;
    document.getElementById('mr-roboger').hidden = true;
    window.scrollTo(0, document.body.scrollHeight);
    setTimeout(() => {
      document.getElementById('loader').hidden = true;
      robogerize(num, name, order);
    }, 3500);
  }
}

function validate(num, numField, name, nameField) {
  if (num > 100 || num < -100) {
    alert('That number is too large. Keep it a hundred please and thank you.');
  } else if (!num || !name) {
    alert('Fill them fields, please.');
    if (!num) {
      numField.classList = 'form-control is-invalid';
    } else if (!name) {
      numField.classList = 'form-control';
      nameField.classList = 'form-control is-invalid';
    }
  } else if (!name.match(/^[A-Za-z]+$/)) {
    alert('Name must be letters only.');
  } else {
    numField.classList = 'form-control';
    nameField.classList = 'form-control';
    return true;
  }
}

function displayResults(outputArr) {
  const outputDiv = document.getElementById('output');
  document.getElementById('mr-roboger').hidden = false;
  outputArr.forEach((item) => {
    const outputNode = document.createElement('p');
    outputNode.className = "text-center"
    outputNode.textContent = item;
    outputDiv.appendChild(outputNode);
  });
  window.scrollTo(0, 600);
}

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
