module.exports = (httpServer) => {
	const { Server } = require('socket.io');
	const io = new Server(httpServer);

	io.on('connection', (socket) => {
		// const user = socket.handshake.headers.cookie;
		const user = socket.handshake.headers.cookie.split('=').pop();
		console.log(user);
		socket.on('message', (message) => {
			io.emit('message', {
				user,
				message,
			});
		});
	});
};
