document.addEventListener('DOMContentLoaded', function () {
    const shareButton = document.querySelector('.share-button-code');
    if (shareButton) {
        shareButton.addEventListener('click', function () {
            const language = document.querySelector('.editor-wrapper').getAttribute('data-lang');
            console.log(language);
            const editorLines = document.querySelectorAll('#editor .ace_line');
            const codeContent = Array.from(editorLines)
                .map(line => line.textContent)
                .join('\n');
            console.log(codeContent);

            fetch('/Share/SaveCode', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: codeContent, lang: language })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Code could not be saved to the server.');
                    }
                    return response.json();
                })
                .then(data => {
                    const shareUrl = data.shareUrl;
                    document.querySelector('.modal-header h2').textContent = 'Share your code';
                    document.querySelector('.modal-body').innerHTML = `
                    <div class="share-code-container">
                        <input type="text" value="${shareUrl}" readonly class="share-code-value" />
                    </div>
                    <button class="share-code-copy-btn" title="Copy Link" style="display: inline-block;" onclick="navigator.clipboard.writeText('${shareUrl}')">Copy Link</button>
                `;
                    document.querySelector('.share-link-generating-modal').style.display = 'block';
                    function closeModal() {
                        document.querySelector('.share-link-generating-modal').style.display = 'none';
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred while sharing the code.');
                });
        });
    } else {
        console.log('Share button not found');
    }
});
