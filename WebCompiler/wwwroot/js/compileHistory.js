
//Ajax to save compile history
// Click event listener for the Save button
document.querySelector('.custom-modal-save-btn').addEventListener('click', function () {
    const title = document.getElementById('titleInput').value;

    // Collect code from all elements with the class `ace_line`
    const aceLines = document.querySelectorAll('#editor .ace_line');
    let content = '';

    // Iterate through each line and append its inner text
    aceLines.forEach(line => {
        content += line.innerText + '\n'; // Add a newline after each line
    });

    console.log("Title:", title);
    console.log("Content:", content);

    // Perform AJAX request to save the content
    $.ajax({
        url: '/CompileHistory/SaveCompileHistory', // Adjust with your actual URL if needed
        type: 'POST',
        data: {
            title: title,
            content: content
        },
        success: function (response) {
            // Hide the modal
            $('#customModal').hide();

            // Optionally update a section with the new content
            $('#compileHistorySection').html(response);

        },
        error: function (xhr, status, error) {
            console.error("Error saving compile history:", error);
            alert("Failed to save compile history.");
        }
    });
});


$(document).on('click', '.history-category', function () {

    const compileId = $(this).data('id');
    // Get the language from ViewBag.language
    $.ajax({
        url: '/CompileHistory/showOldCompile',
        type: 'GET',
        data: { compileId: compileId },
        success: function (response) {
            // Decode HTML entities
            const decodedContent = $("<textarea/>").html(response).text();

            // Set the decoded content to Ace Editor
            editor.setValue(decodedContent, -1);
        },
        error: function (xhr, status, error) {
            console.error("Error loading compile history:", error);
            alert("Failed to load compile history. Please try again.");
        }
    });
});