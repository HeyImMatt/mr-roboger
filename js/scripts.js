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

function robogerize(num, name) {
  console.log(num, name)
}