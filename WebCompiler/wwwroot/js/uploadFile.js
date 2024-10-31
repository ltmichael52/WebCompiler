
// Khởi tạo Ace Editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/python");

// Thêm sự kiện khi người dùng upload file
document.getElementById('fileInput').addEventListener('change', function (event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var content = e.target.result;
            // Đưa nội dung file vào Ace Editor
            editor.setValue(content);
        };
        reader.readAsText(file);
    } else {
        alert('No file selected');
    }
});