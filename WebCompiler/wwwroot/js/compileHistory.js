
//Ajax to save compile history
document.querySelector('.custom-modal-save-btn').addEventListener('click', function () {
    var title = document.getElementById('titleInput').value;
    var content = document.getElementById('editor').innerText;
    console.log(title);
    console.log(content);
    $.ajax({
        url: '/CompileHistory/SaveCompileHistory', // Replace with your controller's actual URL
        type: 'POST',
        data: {
            content: content,
            title: title
        },
        success: function (response) {
            $('#customModal').hide();
            $('#compileHistorySection').html(response);
        },
        error: function (xhr, status, error) {
            console.error("Error saving compile history:", error);
            alert("Failed to save compile history.");
        }
    });
});