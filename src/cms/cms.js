import CMS from "decap-cms-app";
import LinkFileComponent from "./components/linkFileComponent";
import LinkFileButtonComponent from "./components/linkFileButtonComponent";

CMS.registerEditorComponent(LinkFileComponent);
CMS.registerEditorComponent(LinkFileButtonComponent);

window.CMS_MANUAL_INIT = true;

if (process.env.BRANCH === "preview") {
  console.log("---- USING PREVIEW BACKEND ----")
  CMS.init({
    config: {
      backend: {
        name: 'github',
        repo: 'mlibrary/about-aberdeenunipress',
        branch: 'preview'
      }
    }
  });
} else {
  CMS.init({
    config: {
      backend: {
        name: 'github',
        repo: 'mlibrary/about-aberdeenunipress',
        branch: 'main'
      }
    }
  });
}
