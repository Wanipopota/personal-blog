//button to switch between darkmode and lightmode
const themeBtn = document.querySelectorAll("#theme");
const body = document.querySelector('body');
let mode = 'light';

themeBtn.forEach(btn => {
  btn.addEventListener('click', function() {
    if (mode === 'dark') {
      mode = 'light';
      body.setAttribute('id', 'light');
    } else {
      mode = 'dark';
      body.setAttribute('id', 'dark');
    }
  });
});

