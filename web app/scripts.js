const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

userInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});


function appendMessage(message, sender) {
    let messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.textContent = message;
    
    if (sender === 'user') {
        messageElement.classList.add('user-message-animation');
    } else {
        messageElement.classList.add('bot-message-animation');
    }

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const message = userInput.value.trim();

    if (message.length === 0) {
        return;
    }

    appendMessage(message, 'user');
    userInput.value = '';

    // Fetch response from the chatbot and append it to the chat
    fetch('http://localhost:5005/webhooks/rest/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message, sender: "user" }),
    })
    .then((response) => response.json())
    .then((data) => {
        appendMessage(data[0].text, 'bot');
    })
    .catch((error) => {
        console.error('Error fetching chatbot response:', error);
        appendMessage('There was an error getting a response. Please try again later.', 'bot');
    });
}
