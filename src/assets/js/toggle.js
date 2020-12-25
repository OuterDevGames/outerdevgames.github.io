let body = document.querySelector('body');
let enable = document.getElementById('toggle-light');
var lightMode = false;

enable.addEventListener('click', event => {
	lightMode = !lightMode;
	body.classList.toggle('light-mode');
});
