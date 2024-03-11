import React from "react";

export const MarkdownContext = React.createContext<TMarkdownContext | null>(
  null
);

export function MarkdownProvider({ children }: { children: React.ReactNode }) {
  const [markdown, setMarkdown] = React.useState("# Preview Markdown");

  const handler = {
    setMarkdown,
  };

  const value = {
    markdown,
    handler,
  };

  return (
    <MarkdownContext.Provider value={value}>
      {children}
    </MarkdownContext.Provider>
  );
}
