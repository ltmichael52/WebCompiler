
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
        let content = getEditorCode();

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

function getEditorCode() {
    const editorLines = document.querySelectorAll('#editor .ace_line_group');
    return processCode(editorLines);
}

function processCode(editorLines) {
    return Array.from(editorLines)
        .map(line => {
            let lineContent = line.innerHTML;

            // Replace &nbsp; with a regular space
            lineContent = lineContent.replace(/\s*(&nbsp;)+/g, ' ');

            // Handle comments
            lineContent = lineContent.replace(/(<span class="ace_comment">.*?<\/span>)/g, match =>
                match.replace(/\s+/g, ' ')
            );

            // Handle strings
            lineContent = lineContent.replace(/(<span class="ace_string">.*?<\/span>)/g, match =>
                match
                    .replace(/>\s+/g, '>') // Remove spaces after the opening tag
                    .replace(/\s+</g, '<') // Remove spaces before the closing tag
                    .replace(/\s+/g, ' ')  // Normalize spaces within the string
            );

            return lineContent;
        })
        .join('\n'); // Combine all lines into one block of code
}