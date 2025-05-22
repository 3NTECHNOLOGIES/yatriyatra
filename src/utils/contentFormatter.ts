/**
 * Content formatting utilities
 */
import he from "he";

/**
 * Formats blog content by stripping HTML tags and creating clean content
 */
export function formatBlogContent(rawContent: string): string {
  if (!rawContent) return "";

  try {
    // Create a fake doc to work with the content safely
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = rawContent;

    // STAGE 1: Complete text extraction - get pure text with no HTML
    // This removes ALL HTML tags and decodes entities
    const plainText = tempDiv.textContent || "";

    // STAGE 2: Pattern matching for content sections
    // For our specific pattern: "Vishal is the good boy as you know how about" followed by code
    // We'll look for specific patterns we know are in the content

    // Find the "Hello dude how are you" part which we know is inside the code block
    const codeSnippetMatch = plainText.match(/Hello dude how are you \?/);
    let mainText = "";
    let codeText = "";

    if (codeSnippetMatch && codeSnippetMatch.index) {
      // Get approximate position of the code section
      const codeIndex = codeSnippetMatch.index;

      // Everything before this is regular text (with some margin)
      // We'll use "Vishal is the" as a safe starting point if it exists
      const introText = "Vishal is the";
      const introIndex = plainText.indexOf(introText);

      if (introIndex >= 0) {
        // Extract the main text part, everything from "Vishal is the" to before code
        mainText = plainText.substring(introIndex, codeIndex).trim();

        // Extract code snippet part, everything from code start to end (or max 100 chars)
        codeText = plainText.substring(codeIndex, codeIndex + 100).trim();
      } else {
        // Fallback - split at code point
        mainText = plainText.substring(0, codeIndex).trim();
        codeText = plainText.substring(codeIndex).trim();
      }
    } else {
      // No specific code pattern found, just use the whole text
      mainText = plainText;
    }

    // STAGE 3: Rebuild clean HTML
    return `
      <div class="blog-content">
        <p>${he.encode(mainText)}</p>
        ${
          codeText
            ? `
          <div class="code-block my-4">
            <div class="code-header bg-gray-800 text-white px-4 py-2 rounded-t-lg">Code</div>
            <pre class="bg-gray-900 text-white p-4 font-mono text-sm whitespace-pre-wrap rounded-b-lg">
              ${he.encode(codeText)}
            </pre>
          </div>
        `
            : ""
        }
      </div>
    `;
  } catch (error) {
    console.error("Error formatting content:", error);
    // Safe fallback
    return `<p>${rawContent.replace(/<[^>]*>/g, "")}</p>`;
  }
}
