function toggleChatBox() {
    const chatBox = document.getElementById('chatBox');
    chatBox.style.display = (chatBox.style.display === 'none' || chatBox.style.display === '') ? 'flex' : 'none';
}

async function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (message) {
        const chatContent = document.getElementById('chatContent');

        // Hiển thị tin nhắn của người dùng
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

                // Kiểm tra xem response có tồn tại và có trường 'response' không
                const rawHTML = data && data.response ? data.response : 'No response from AI';

                // Tách nội dung HTML để phân biệt đoạn code và text
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = rawHTML;

                // Tạo khối chat của AI
                const aiMessage = document.createElement('div');
                aiMessage.classList.add('ai-message');

                // Thêm phần "AI:" trước mỗi câu trả lời của AI
                const aiLabel = document.createElement('strong');
                aiLabel.textContent = 'AI:';
                aiMessage.appendChild(aiLabel);

                // Duyệt qua các phần tử con trong HTML
                tempDiv.childNodes.forEach((node) => {
                    if (node) {  // Kiểm tra node có tồn tại
                        if (node.tagName === 'PRE') {
                            // Nếu là khối code (<pre><code>), tạo một div cho code
                            const codeBlock = document.createElement('div');
                            codeBlock.classList.add('code-block');
                            codeBlock.appendChild(node.cloneNode(true)); // Sao chép nội dung code
                            aiMessage.appendChild(codeBlock);
                        } else {
                            // Nếu là nội dung văn bản thông thường
                            const textBlock = document.createElement('div');
                            textBlock.classList.add('text-block');
                            textBlock.innerHTML = node.outerHTML || '';  // Kiểm tra node.outerHTML
                            aiMessage.appendChild(textBlock);
                        }
                    }
                });

                chatContent.appendChild(aiMessage);
            } else {
                // Hiển thị lỗi
                const errorMessage = await response.text();
                const errorDiv = document.createElement('div');
                errorDiv.textContent = `Error: ${errorMessage || 'Unknown error occurred'}`;  // Kiểm tra errorMessage
                errorDiv.classList.add('error-message');
                chatContent.appendChild(errorDiv);
            }
        } catch (error) {
            const errorDiv = document.createElement('div');
            errorDiv.textContent = `Error: ${error.message || 'Unknown error occurred'}`;  // Kiểm tra error.message
            errorDiv.classList.add('error-message');
            chatContent.appendChild(errorDiv);
        }

        // Tự động cuộn xuống cuối nội dung chat
        chatContent.scrollTop = chatContent.scrollHeight;
    }
}





