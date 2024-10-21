const btnLogin = document.querySelector('#login');

btnLogin.addEventListener('click', () => {
	const user = document.querySelector('#username').value;

	user != '' && user.length < 16
		? ((document.cookie = `username=${user}`), (document.location.href = '/'))
		: alert('Username must be less than 16 characters and cannot be empty');
});
