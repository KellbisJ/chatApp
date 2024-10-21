const btnLogin = document.querySelector('#login');

btnLogin.addEventListener('click', () => {
	const user = document.querySelector('#username').value;

	user != '' ? ((document.cookie = `username=${user}`), (document.location.href = '/')) : alert('Please enter a username');
});
