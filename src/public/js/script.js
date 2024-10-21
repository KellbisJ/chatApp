const socket = io();

const sendMessage = document.querySelector('#sendMessage');

const allMessages = document.querySelector('#allMessages');

sendMessage.addEventListener('click', () => {
	const message = document.querySelector('#typeMessage');
	if (message.value === '') {
		alert('Please type a message');
	} else {
		socket.emit('message', message.value);
	}
	message.value = '';
});

socket.on('message', ({ user, message }) => {
	const msg = document.createRange().createContextualFragment(`
    <div class="message">
        <div class="imageContainer">
          <img src="https://tse4.mm.bing.net/th?id=OIG4.RI2fmIMOiSz4oAt8yecj&pid=ImgGn"  class="userImage" />
        </div>
        <div class="messageBody">
          <div class="userInfo">
            <span class="username">${user}</span>
            <span class="onlineTime">1 second ago</span>
          </div>
          <p>${message}</p>

        </div>
      </div>
      `);
	allMessages.append(msg);
});
