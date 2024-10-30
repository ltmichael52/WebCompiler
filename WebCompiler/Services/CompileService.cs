using System.Diagnostics;
using WebCompiler.Response;
using WebCompiler.Services.IServices;

namespace WebCompiler.Services
{
    public class CompileService : ICompileService
    {
        public async Task<CompileResponse> ExecuteCSharpCode(string codeRequest)
        {
            string tempFilePath = null;
            string assemblyFilePath = null; // Path for the compiled assembly
            try
            {
                // Save the code to a temporary file with a .cs extension
                tempFilePath = Path.GetTempFileName() + ".cs"; // Ensure it has a .cs extension
                await File.WriteAllTextAsync(tempFilePath, codeRequest);

                // Log the contents of the temporary file for debugging
                var code = await File.ReadAllTextAsync(tempFilePath);
                Console.WriteLine($"Temporary file contents:\n{code}");

                // Path to the Mono C# compiler
                var mcsPath = @"C:\Program Files\Mono\bin\mono.exe"; // Adjust this path

                // Prepare the output path for the compiled assembly
                assemblyFilePath = Path.Combine(Path.GetTempPath(), "output.dll");

                // Compile the C# code to a DLL
                var compileProcess = new Process
                {
                    StartInfo = new ProcessStartInfo
                    {
                        FileName = mcsPath,
                        Arguments = $"-out:\"{assemblyFilePath}\" \"{tempFilePath}\"", // Use mcs to compile
                        RedirectStandardOutput = true,
                        RedirectStandardError = true,
                        UseShellExecute = false,
                        CreateNoWindow = true,
                    }
                };

                // Log the command being executed for debugging
                Console.WriteLine($"Using C# Compiler Path: {mcsPath}");
                Console.WriteLine($"Arguments: -out:\"{assemblyFilePath}\" \"{tempFilePath}\"");

                compileProcess.Start();
                await compileProcess.WaitForExitAsync(); // Wait for compilation to complete

                if (compileProcess.ExitCode != 0)
                {
                    var error = await compileProcess.StandardError.ReadToEndAsync();
                    return new CompileResponse
                    {
                        IsSuccess = false,
                        Message = "Compilation error",
                        FilePath = error // Include the error details
                    };
                }

                // Now AOT compile the generated DLL
                var monoPath = @"C:\Program Files\Mono\bin\mono.exe"; // Path to Mono
                var aotProcess = new Process
                {
                    StartInfo = new ProcessStartInfo
                    {
                        FileName = monoPath,
                        Arguments = $"--aot \"{assemblyFilePath}\"", // AOT compile the DLL
                        RedirectStandardOutput = true,
                        RedirectStandardError = true,
                        UseShellExecute = false,
                        CreateNoWindow = true,
                    }
                };

                // Log the command being executed for debugging
                Console.WriteLine($"Using Mono AOT Compiler Path: {monoPath}");
                Console.WriteLine($"Arguments: --aot \"{assemblyFilePath}\"");

                aotProcess.Start();
                await aotProcess.WaitForExitAsync(); // Wait for AOT compilation to complete

                if (aotProcess.ExitCode != 0)
                {
                    var error = await aotProcess.StandardError.ReadToEndAsync();
                    return new CompileResponse
                    {
                        IsSuccess = false,
                        Message = "AOT compilation error",
                        FilePath = error // Include the error details
                    };
                }

                // Return path to the generated DLL file
                return new CompileResponse
                {
                    IsSuccess = true,
                    FilePath = assemblyFilePath, // Path to the compiled DLL
                    Message = "Compilation successful"
                };
            }
            catch (Exception ex)
            {
                return new CompileResponse
                {
                    IsSuccess = false,
                    Message = $"Runtime error: {ex.Message}",
                    FilePath = null
                };
            }
            finally
            {
                // Clean up temporary files
                if (tempFilePath != null && File.Exists(tempFilePath))
                {
                    File.Delete(tempFilePath);
                }
                if (assemblyFilePath != null && File.Exists(assemblyFilePath))
                {
                    File.Delete(assemblyFilePath);
                }
            }
        }
    }
}
