// Get the current language from the data-lang attribute
const editorWrapper = document.querySelector("#root");
const language = editorWrapper?.getAttribute("data-lang") || "python";

// Init Ace Editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode(`ace/mode/${language}`);

// Define valid file extensions for each language
const validExtensions = {
    python: ".py",
    csharp: ".cs",
    java: ".java",
    javascript: ".js",
    cpp: ".cpp",
    swift: ".swift",
    golang: ".go",
    r: ".R"
};

// Function to check if the file is valid
function isFileValid(fileName, language) {
    const extension = fileName.split('.').pop().toLowerCase();
    return validExtensions[language] === `.${extension}`;
}

// Add event when user uploads file
document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        if (!isFileValid(file.name, language)) {
            alert(`Invalid file type! Please upload a file with extension ${validExtensions[language]}.`);
            return;
        }
        /*uploadFileName = file.name;*/
        const reader = new FileReader();
        reader.onload = function (e) {
            const content = e.target.result;
            // Put the file content into Ace Editor
            editor.setValue(content);
            // Reset input value to trigger change event for next upload
            event.target.value = '';
        };
        reader.readAsText(file);
    } else {
        alert('No file selected');
    }
});