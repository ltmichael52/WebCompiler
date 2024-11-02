// S? ki?n download file sau khi biên d?ch
// L?y code t? editor
class CodeEditor {
    constructor(editor) {
        this.editor = editor;
    }

    getCode() {
        return this.editor.getValue();
    }
}

// X? lý l?u file
class FileSaver {
    constructor(fileName) {
        this.fileName = fileName || 'Main.cs';
    }

    async save(content) {
        const blob = new Blob([content], { type: 'text/plain' });
        const options = {
            suggestedName: this.fileName,
            types:
                [
                    {
                        description: 'C# Files',
                        accept: { 'text/plain': ['.cs'] },
                    },
                ],
        };

        try {
            const fileHandle = await window.showSaveFilePicker(options);
            const writable = await fileHandle.createWritable();
            await writable.write(blob);
            await writable.close();
            console.log('File ?ã ???c l?u thành công');
        } catch (error) {
            console.error('L?i khi l?u file:', error);
        }
    }
}

// X? lý t?i xu?ng
class DownloadManager {
    constructor(editor, fileName = '') {
        this.editor = new CodeEditor(editor);
        this.fileSaver = new FileSaver(fileName);
    }

    async downloadCode() {
        const code = this.editor.getCode();
        await this.fileSaver.save(code);
    }
}

document.getElementById('downloadButton').addEventListener('click', async function () {
    const downloadManager = new DownloadManager(editor, uploadedFileName);
    await downloadManager.downloadCode();
});