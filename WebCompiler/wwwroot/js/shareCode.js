document.addEventListener('DOMContentLoaded', function () {
    initializeShareButton();
});

function initializeShareButton() {
    const shareButton = document.querySelector('.share-button-code');
    if (shareButton) {
        shareButton.addEventListener('click', handleShareClick);
    } else {
        console.log('Share button not found');
    }
}

function handleShareClick() {
    const language = getEditorLanguage();
    const codeContent = getEditorCode(language);
    sendCodeToServer(codeContent, language)
        .then(data => displayShareModal(data.shareUrl))
        .catch(error => handleShareError(error));
}

function getEditorLanguage() {
    const editorWrapper = document.querySelector('.editor-wrapper');
    return editorWrapper ? editorWrapper.getAttribute('data-lang') : null;
}

function getEditorCode(language) {
    const editorLines = document.querySelectorAll('#editor .ace_line_group');
    const codeProcessors = {
        python: processPythonCode,
        csharp: processCSharpCode,
        default: processCSharpCode,
    };
    const processCode = codeProcessors[language] || codeProcessors.default;
    return processCode(editorLines);
}

function processPythonCode(editorLines) {
    let code = Array.from(editorLines)
        .map(line => {
            // Get the raw HTML content of the line
            let lineContent = line.innerHTML;

            // Replace &nbsp; with a single space
            lineContent = lineContent.replace(/\s*(&nbsp;)+/g, ' ');

            // Process comments (Python uses `#` for single-line comments)
            lineContent = lineContent.replace(/(<span class="ace_comment">.*?<\/span>)/g, match => {
                // Remove extra spaces inside comments
                return match.replace(/\s+/g, ' ').trim();
            });

            // Process strings (Python uses single, double, or triple quotes)
            lineContent = lineContent.replace(/(<span class="ace_string">.*?<\/span>)/g, match => {
                // Remove extra spaces inside strings
                return match
                    .replace(/>\s+/g, '>') // Remove spaces after the opening tag
                    .replace(/\s+</g, '<') // Remove spaces before the closing tag
                    .replace(/\s+/g, ' ') // Normalize spaces between words
                    .trim();
            });

            return lineContent;
        })
        .join('\n'); // Combine all lines into one block of code

    console.log(code); // Debug output to check the result
    return code;
}

function processCSharpCode(editorLines) {
    let code = Array.from(editorLines)
        .map(line => {
            // Get the raw HTML content of the line
            let lineContent = line.innerHTML;

            // Replace with normal spaces
            lineContent = lineContent.replace(/\s*(&nbsp;)+/g, ' ');

            // Process comments
            lineContent = lineContent.replace(/(<span class="ace_comment">.*?<\/span>)/g, match => {
                // Remove extra spaces inside comments
                return match.replace(/\s+/g, ' ').trim();
            });

            // Process strings
            lineContent = lineContent.replace(/(<span class="ace_string">.*?<\/span>)/g, match => {
                // Remove extra spaces inside strings
                return match
                    .replace(/>\s+/g, '>') // Remove spaces after the opening tag
                    .replace(/\s+</g, '<') // Remove spaces before the closing tag
                    .replace(/\s+/g, ' ') // Normalize spaces between words
                    .trim();
            });

            return lineContent;
        })
        .join('\n'); // Combine all lines into one block of code

    console.log(code); // Debug output to check the result
    return code;
}

function sendCodeToServer(content, lang) {
    return fetch('/Share/SaveCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, lang }),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Code could not be saved to the server.');
        }
        return response.json();
    });
}

function displayShareModal(shareUrl) {
    const modal = document.querySelector('.share-link-generating-modal');
    if (modal) {
        modal.querySelector('.modal-header h2').textContent = 'Share your code';
        modal.querySelector('.modal-body').innerHTML = `
            <div class="share-code-container">
                <input type="text" value="${shareUrl}" readonly class="share-code-value" />
            </div>
            <button 
                class="share-code-copy-btn" 
                title="Copy Link" 
                style="display: inline-block;" 
                onclick="navigator.clipboard.writeText('${shareUrl}')">Copy Link</button>
        `;
        modal.style.display = 'block';

        window.closeModal = function () {
            modal.style.display = 'none';
        };
    } else {
        console.error('Modal not found');
    }
}

function handleShareError(error) {
    console.error('Error:', error);
    alert('An error occurred while sharing the code.');
}
