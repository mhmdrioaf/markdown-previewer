import React from "react";
import { MarkdownContext } from "../../lib/markdownContext";
import "../../index.css";
import { marked } from "marked";

export default function MarkdownPreviewer() {
  const { markdown } = React.useContext(MarkdownContext) as TMarkdownContext;
  const test = marked.parse(markdown, {
    gfm: true,
    breaks: true,
    pedantic: false,
  });
  return (
    <section className="w-full flex flex-col rounded-md overflow-hidden shadow-sm">
      <div className="w-full bg-primary text-primary-foreground text-center font-medium px-4 py-2">
        Preview
      </div>

      <div
        id="preview"
        className="prose px-4 py-2 bg-white markdown"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </section>
  );
}
