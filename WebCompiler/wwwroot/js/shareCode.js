document.querySelector('.share-buttoncode').addEventListener('click', function () {
    // Get all HTML code of the page
    // Select all code lines from elements within the editor
    const editorLines = document.querySelectorAll('#editor .ace_line');
    // Extract and clean text content line by line
    const codeContent = Array.from(editorLines)
        .map(line => line.textContent.trim())  // Get text content of each line, trimmed
        .filter(line => line)                  // Remove any empty lines
        .join('\n');                           // Join with newline for readable formatting
    console.log(codeContent);
    fetch('/Share/SaveCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: codeContent })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Code could not be saved to the server.');
            }
            return response.json();
        })
        .then(data => {
            const shareUrl = data.shareUrl;
            // JavaScript to update and display modal
            document.querySelector('.modal-header h2').textContent = 'Share your code';
            document.querySelector('.modal-body').innerHTML = `
                    <div class="share-code-container">
                        <input type="text" value="${shareUrl}" readonly class="share-code-value" />
                    </div>
                    <button class="share-code-copy-btn" title="Copy Link" style="display: inline-block;" onclick="navigator.clipboard.writeText('${shareUrl}')">Copy Link</button>
                `;
            // Show modal
            document.querySelector('.share-link-generating-modal').style.display = 'block';
            // Function to close modal
            function closeModal() {
                document.querySelector('.share-link-generating-modal').style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while sharing the code.');
        });
});