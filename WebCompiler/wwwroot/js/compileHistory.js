
//Ajax to save compile history
// Click event listener for the Save button
var isloading = false;
$(document).off('click', '.custom-modal-save-btn').on('click', '.custom-modal-save-btn', function (event) {
    if (!isloading) {
        event.preventDefault(); // Prevent default form submission

        isloading = true;
        let countTime = 0;
        console.log("Click time :" + countTime);
        countTime += 1;

        const title = document.getElementById('titleInput').value;

        // Collect code from all elements with the class `ace_line`
        const aceLines = document.querySelectorAll('#editor .ace_line');
        let language = getEditorLanguage();
        let content = getEditorCode(language);

        // Perform AJAX request to save the content
        $.ajax({
            url: '/CompileHistory/SaveCompileHistory',
            type: 'POST',
            data: { title, content },
            success: function (response) {
                $('#customModal').hide();
                $('#titleInput').val('');
                $('#compileHistorySection').html(response);
                isloading = false;
            },
            error: function (xhr, status, error) {
                console.error("Error saving compile history:", error);
                alert("Failed to save compile history.");
                isloading = false;
            }
        });
    }
});

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
