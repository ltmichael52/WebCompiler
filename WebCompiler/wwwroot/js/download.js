// Sự kiện download file sau khi biên dịch
let uploadedFileName = '';
document.getElementById('downloadButton').addEventListener('click', async function () {
    const code = editor.getValue();
    const blob = new Blob([code], { type: 'text/plain' });
    // Tạo một file handle
    const options = {
        suggestedName: uploadedFileName || 'Main.cs',
        types: [{
            description: 'C# Files',
            accept: { 'text/plain': ['.cs'] },
        }],
    };
    try {
        const fileHandle = await window.showSaveFilePicker(options);
        // Ghi dữ liệu vào file
        const writable = await fileHandle.createWritable();
        await writable.write(blob);
        await writable.close();
    } catch (error) {
        console.error('Error saving file:', error);
    }
});