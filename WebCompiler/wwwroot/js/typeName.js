class LanguageHandler {
    constructor(language) {
        this.language = language;
    }

    updatePageTitle() {
        const titles = {
            csharp: "C# Online Compiler",
            python: "Python Online Compiler",
            java: "Java Online Compiler",
            javascript: "JavaScript Online Compiler",
        };

        // Update title for page
        document.title = titles[this.language] || "Online Compiler";
    }

    updateLogoTitle() {
        const logoTitleElement = document.querySelector("#compiler-title");
        if (!logoTitleElement) return;

        const titles = {
            csharp: "C# Online Compiler",
            python: "Python Online Compiler",
            java: "Java Online Compiler",
            javascript: "JavaScript Online Compiler",
        };

        // Update title for logo
        logoTitleElement.textContent = titles[this.language] || "Online Compiler";
    }

    updateFileName() {
        const fileNameElement = document.querySelector(".file-name");
        if (!fileNameElement) return;

        const fileNames = {
            csharp: "Main.cs",
            python: "main.py",
            java: "Main.java",
            javascript: "Main.js",
        };

        // Name display
        fileNameElement.textContent = fileNames[this.language] || "Untitled";
    }

    applyChanges() {
        this.updatePageTitle();
        this.updateLogoTitle();
        this.updateFileName();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const editorWrapper = document.querySelector("#root");
    const language = editorWrapper?.getAttribute("data-lang");

    if (language) {
        const languageHandler = new LanguageHandler(language);
        languageHandler.applyChanges();
    }
});
