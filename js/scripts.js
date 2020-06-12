function robogerize(num, name) {
  displayResults(num, name)
}

function displayResults(nums, name) {
  const outputDiv = document.getElementById('output');
  outputDiv.append(`${nums}`);
}

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', (event => {
    event.preventDefault();
    const num = document.getElementById('num-input').value;
    const name = document.getElementById('name').value;
    if (!num || !name) {
      alert('Please fill out the fields!')
    } else robogerize(num, name)
  }));
});