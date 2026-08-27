import React from "react";
import { MarkdownPreview, PreviewPage, PreviewTitle } from "./components";

const BasicPagePreview = ({ entry }) => {
  const title = entry.getIn(["data", "title"]) || "Untitled page";
  const body = entry.getIn(["data", "body"]) || "";

  return (
    <PreviewPage>
      <PreviewTitle>{title}</PreviewTitle>
      <MarkdownPreview value={body} />
    </PreviewPage>
  );
};

export default BasicPagePreview;