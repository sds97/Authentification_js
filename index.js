const login = document.querySelector('#login');
const pwd = document.querySelector('#pwd');

login.addEventListener('input', ({ target: {value} }) => {
	if (value.length === 0) {
		login.style.borderColor = 'black';
	}
	else if (!value.includes('@')) {
		login.style.borderColor = 'red';
	}
	else if (!value.includes('.')) {
		login.style.borderColor = 'red';
	}
	else{
		login.style.borderColor = 'green';
	}
});

pwd.addEventListener('input', ({ target: {value} }) => {
	if (value.length === 0) {
		pwd.style.borderColor = 'black';
	}
	else if (value.length < 8) {
		pwd.style.borderColor = 'red';
	}
	else{
		pwd.style.borderColor = 'green';
	}
})
