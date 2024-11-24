// Function to toggle the chat box visibility
function toggleChatBox() {
    const chatBox = document.getElementById('chatBox');
    chatBox.style.display = (chatBox.style.display === 'none' || chatBox.style.display === '') ? 'flex' : 'none';
}

// Function to send the message
async function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (message) {
        const chatContent = document.getElementById('chatContent');

        // Show the user's message
        const userMessage = document.createElement('div');
        userMessage.innerHTML = `<strong>You:</strong> <span>${message}</span>`;
        userMessage.classList.add('user-message');
        chatContent.appendChild(userMessage);
        input.value = '';

        try {
            const response = await fetch('/api/Chatbox/sendMessage', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: message }),
            });

            if (response.ok) {
                const data = await response.json();

                // Check if the response contains a 'response' field
                const rawHTML = data && data.response ? data.response : 'No response from AI';

                // Create a temporary div to parse HTML
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = rawHTML;

                // Create AI's chat block
                const aiMessage = document.createElement('div');
                aiMessage.classList.add('ai-message');

                // Add the "AI:" label before the AI's response
                const aiLabel = document.createElement('strong');
                aiLabel.textContent = 'AI:';
                aiMessage.appendChild(aiLabel);

                // Loop through child nodes to differentiate code and text
                tempDiv.childNodes.forEach((node) => {
                    if (node) {
                        if (node.tagName === 'PRE') {
                            // If it's a <pre> block, create a div for the code block
                            const codeBlock = document.createElement('div');
                            codeBlock.classList.add('code-block');
                            codeBlock.appendChild(node.cloneNode(true)); // Copy the code content
                            aiMessage.appendChild(codeBlock);
                        } else {
                            // If it's regular text
                            const textBlock = document.createElement('div');
                            textBlock.classList.add('text-block');
                            textBlock.innerHTML = node.outerHTML || '';  // Ensure node.outerHTML is valid
                            aiMessage.appendChild(textBlock);
                        }
                    }
                });

                chatContent.appendChild(aiMessage);
            } else {
                // Display error message
                const errorMessage = await response.text();
                const errorDiv = document.createElement('div');
                errorDiv.textContent = `Error: ${errorMessage || 'Unknown error occurred'}`;
                errorDiv.classList.add('error-message');
                chatContent.appendChild(errorDiv);
            }
        } catch (error) {
            const errorDiv = document.createElement('div');
            errorDiv.textContent = `Error: ${error.message || 'Unknown error occurred'}`;
            errorDiv.classList.add('error-message');
            chatContent.appendChild(errorDiv);
        }

        // Automatically scroll to the bottom of the chat content
        chatContent.scrollTop = chatContent.scrollHeight;
    }
}

// Event listener to send message when Enter key is pressed
document.getElementById('chatInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter behavior (like form submission)
        sendMessage();
    }
});

// Function to clear the chat content
function clearChat() {
    const chatContent = document.getElementById('chatContent');
    chatContent.innerHTML = ''; // Clear all chat messages
}
