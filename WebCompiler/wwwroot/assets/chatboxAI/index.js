// Hàm để ẩn/hiện chat box
function toggleChatBox() {
    const chatBox = document.getElementById('chatBox');
    chatBox.style.display = chatBox.style.display === 'none' ? 'flex' : 'none';
}
// JavaScript to handle chat messages
async function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (message) {
        const chatContent = document.getElementById('chatContent');
        const userMessage = document.createElement('div');
        userMessage.textContent = "You: " + message;
        chatContent.appendChild(userMessage);
        // Clear input
        input.value = '';
        // Gửi tin nhắn đến API backend
        const response = await fetch('/api/Chatbox/sendMessage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: message })
        });
        const data = await response.json();
        const aiMessage = document.createElement('div');
        aiMessage.textContent = "AI: " + data.response;
        aiMessage.style.color = 'blue';
        chatContent.appendChild(aiMessage);
        // Cuộn xuống dưới cùng của chat
        chatContent.scrollTop = chatContent.scrollHeight;
    }
}