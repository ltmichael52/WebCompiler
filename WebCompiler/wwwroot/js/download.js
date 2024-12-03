// Sự kiện download file sau khi biên dịch
document.getElementById('downloadButton').addEventListener('click', async function () {
    const code = editor.getValue();

    // Lấy ngôn ngữ từ thuộc tính data-lang
    const language = this.getAttribute('data-lang');
    let fileExtension = '';
    console.log("Lang: " + language);

    // Xác định phần mở rộng file dựa trên ngôn ngữ
    switch (language) {
        case 'python':
            fileExtension = '.py';
            break;
        case 'csharp':
            fileExtension = '.cs';
            break;
        case 'java':
            fileExtension = '.java';
            break;
        case 'javascript':
            fileExtension = '.js';
            break;
        case 'cpp':
            fileExtension = '.cpp';
            break;
        case 'swift':
            fileExtension = '.swift';
            break;
        case 'golang':
            fileExtension = '.go';
            break;
        case 'r':
            fileExtension = '.R';
            break;
        default:
            fileExtension = '.txt'; // Mặc định nếu không xác định được ngôn ngữ
    }

    // Tạo Blob từ mã nguồn
    const blob = new Blob([code], { type: 'text/plain' });

    // Tùy chọn để lưu file
    const options = {
        suggestedName: `Main${fileExtension}`,
        types: [{
            description: `${language ? language.toUpperCase() : 'TEXT'} Files`,
            accept: { 'text/plain': [fileExtension] },
        }],
    };

    try {
        // Hiển thị hộp thoại lưu file
        const fileHandle = await window.showSaveFilePicker(options);
        const writable = await fileHandle.createWritable();
        await writable.write(blob); // Ghi dữ liệu vào file
        await writable.close(); // Đóng file
    } catch (error) {
        console.error('Error saving file:', error);
    }
});