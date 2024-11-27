// Lấy ngôn ngữ hiện tại từ thuộc tính data-lang
const editorWrapper = document.querySelector("#root");
const language = editorWrapper?.getAttribute("data-lang") || "python";

// Khởi tạo Ace Editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode(`ace/mode/${language}`);

// Định nghĩa phần mở rộng file hợp lệ cho từng ngôn ngữ
const validExtensions = {
    python: ".py",
    csharp: ".cs",
    java: ".java",
    javascript: ".js",
    cpp: ".cpp",
    swift: ".swift",
    golang: ".go"
};

// Hàm để kiểm tra file có hợp lệ không
function isFileValid(fileName, language) {
    const extension = fileName.split('.').pop().toLowerCase();
    return validExtensions[language] === `.${extension}`;
}

// Thêm sự kiện khi người dùng upload file
document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        if (!isFileValid(file.name, language)) {
            alert(`Invalid file type! Please upload a file with extension ${validExtensions[language]}.`);
            return; // Dừng lại nếu file không hợp lệ
        }
        /*uploadFileName = file.name;*/
        const reader = new FileReader();
        reader.onload = function (e) {
            const content = e.target.result;
            // Đưa nội dung file vào Ace Editor
            editor.setValue(content);
            // Reset input value để kích hoạt sự kiện change cho lần upload tiếp theo
            event.target.value = '';
        };
        reader.readAsText(file);
    } else {
        alert('No file selected');
    }
});
