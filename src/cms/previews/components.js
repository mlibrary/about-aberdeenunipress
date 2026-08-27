import React from "react";
import ReactMarkdown from "react-markdown";

export const PreviewPage = ({ children }) => (
  <main id="preview" className="page-container">
    <div className="container py-5">{children}</div>
  </main>
);

export const PreviewTitle = ({ children }) => <h1>{children}</h1>;

export const MarkdownPreview = ({ value }) => (
  <ReactMarkdown>{value || ""}</ReactMarkdown>
);