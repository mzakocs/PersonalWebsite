import marked from 'marked';
import { highlight, highlightAuto } from 'highlight.js';

// Converts Markdown text files to raw HTMl
export function markdownToHtml(md, baseUrl) {
  const html = marked(md, {
    baseUrl,
    highlight: (code, lang) => {
      if (!lang) {
        return highlightAuto(code).value;
      }
      return highlight(lang, code).value;
    },
  });
  return html;
}