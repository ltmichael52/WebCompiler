// Khởi tạo Ace Editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.setOptions
({
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true
});

// Thêm phím Tab cho gợi ý hoàn thành mã
editor.commands.bindKey("Tab", "startAutocomplete");

// Hàm gợi ý hoàn thành mã cho C#
function CSharpCompleter()
{
    var completeCSharp =
    {
        getCompletions: function (editor, session, pos, prefix, callback)
        {
            var suggestions =
                [
                    { caption: "Console.WriteLine", value: "Console.WriteLine();", meta: "method", score: 1000 },
                    { caption: "public class", value: "public class ClassName {\n\n}", meta: "snippet", score: 900 },
                    { caption: "for loop", value: "for (int i = 0; i < length; i++) {\n\n}", meta: "snippet", score: 800 },
                    { caption: "if statement", value: "if (condition) {\n\n}", meta: "snippet", score: 700 },
                    { caption: "int", value: "int", meta: "keyword", score: 600 },
                    { caption: "string", value: "string", meta: "keyword", score: 600 },
                    { caption: "bool", value: "bool", meta: "keyword", score: 600 },
                    { caption: "List", value: "List<Type> listName = new List<Type>();", meta: "snippet", score: 500 }
                ];
            callback(null, suggestions);
        }
    };
    ace.require("ace/ext/language_tools").addCompleter(completeCSharp);
}

// Hàm gợi ý hoàn thành mã cho Python
function PythonCompleter()
{
    var completePython = {
        getCompletions: function (editor, session, pos, prefix, callback)
        {
            var suggestions =
                [
                    { caption: "print", value: "print()", meta: "method", score: 1000 },
                    { caption: "def", value: "def function_name():\n    ", meta: "snippet", score: 900 },
                    { caption: "for loop", value: "for i in range(length):\n    ", meta: "snippet", score: 800 },
                    { caption: "if statement", value: "if condition:\n    ", meta: "snippet", score: 700 },
                    { caption: "int", value: "int", meta: "keyword", score: 600 },
                    { caption: "str", value: "str", meta: "keyword", score: 600 },
                    { caption: "bool", value: "bool", meta: "keyword", score: 600 },
                    { caption: "list", value: "list_name = []", meta: "snippet", score: 500 }
                ];
            callback(null, suggestions);
        }
    };
    ace.require("ace/ext/language_tools").addCompleter(completePython);
}

// Gợi ý hoàn thành mã tương ứng
if (window.location.href.includes("/csharp"))
{
    editor.session.setMode("ace/mode/csharp");
    CSharpCompleter();
} else if (window.location.href.includes("/python"))
{
    editor.session.setMode("ace/mode/python");
    PythonCompleter();
}
