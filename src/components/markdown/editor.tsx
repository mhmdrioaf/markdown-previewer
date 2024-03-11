import React from "react";
import { MarkdownContext } from "../../lib/markdownContext";

export default function MarkdownEditor() {
  const { handler, markdown } = React.useContext(
    MarkdownContext
  ) as TMarkdownContext;
  return (
    <section className="w-full flex flex-col bg-white rounded-md overflow-hidden shadow-sm">
      <div className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium text-center">
        <p>Markdown Editor</p>
      </div>

      <textarea
        id="editor"
        onChange={(e) => handler.setMarkdown(e.target.value)}
        value={markdown}
        className="w-full px-4 py-2 min-h-48 overflow-y-auto focus:outline-none border border-primary/15 rounded-b-md focus:border-primary transition-colors"
        placeholder="Write your markdown here"
      />
    </section>
  );
}
