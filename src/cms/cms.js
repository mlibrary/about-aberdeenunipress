import CMS from "decap-cms-app";
import LinkFileComponent from "./components/linkFileComponent";
import LinkFileButtonComponent from "./components/linkFileButtonComponent";
import "./preview.scss";
import BasicPagePreview from "./previews/basicPagePreview";
import CardPreview from "./previews/cardPreview";
import OurTeamPreview from "./previews/ourTeamPreview";

CMS.registerEditorComponent(LinkFileComponent);
CMS.registerEditorComponent(LinkFileButtonComponent);

CMS.registerPreviewTemplate("cards", CardPreview);
CMS.registerPreviewTemplate("our-team", OurTeamPreview);

[
  "about",
  "our-principles",
  "proposal-books",
  "proposal-book-series",
  "proposal-journals",
  "contact",
  "peer-review",
  "research-integrity",
  "authorship",
  "help",
  "faqs",
  "terms",
  "privacy",
].forEach((name) => {
  CMS.registerPreviewTemplate(name, BasicPagePreview);
});
