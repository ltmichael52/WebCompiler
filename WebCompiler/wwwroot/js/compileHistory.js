
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
        let content = '';

        aceLines.forEach(line => {
            content += line.innerText + '\n';
        });

        console.log("Title:", title);
        console.log("Content:", content);

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