
document.getElementById('no-button').addEventListener('mouseenter', () => {
  var x = Math.random() * (window.innerWidth - document.getElementById('no-button').offsetWidth) - 100;
  var y = Math.random() * (window.innerHeight - document.getElementById('no-button').offsetHeight) - 100;
  document.getElementById('no-button').style.left = `${x}px`;
  document.getElementById('no-button').style.top = `${y}px`;
});


document.getElementById('yes-button1')
  .addEventListener('click', () => location = 'you-pay.html');


document.getElementById('yes-button2')
  .addEventListener('click', () => location = 'happy-page.html');