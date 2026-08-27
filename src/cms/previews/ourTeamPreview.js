import React from "react";
import ReactMarkdown from "react-markdown";
import { PreviewPage, PreviewTitle } from "./components";

const TeamMember = ({ member, columnClass }) => {
  const name = member.get("name");
  const role = member.get("role");
  const subRole = member.get("subRole");
  const image = member.get("image");
  const imgFluid = member.get("imgFluid");

  return (
    <div className={`name-card mb-3 ${columnClass || "col-md-4"}`}>
      {image && (
        <span className="image">
          <img
            className={imgFluid ? "img-fluid" : undefined}
            src={image}
            alt={`Portrait of ${name}`}
          />
        </span>
      )}
      <strong className="navigo">{name}</strong>
      <span className="title">{role}</span>
      {subRole && <span className="title font-italic">{subRole}</span>}
    </div>
  );
};

const TeamGroup = ({ group }) => {
  const members = group.get("members") || [];

  return (
    <>
      <h2>{group.get("groupTitle")}</h2>
      {group.get("subtitle") && (
        <p>
          <em>{group.get("subtitle")}</em>
        </p>
      )}

      <div className="row">
        {members.map((member, index) => (
          <TeamMember
            key={`${member.get("name")}-${index}`}
            member={member}
            columnClass={group.get("columnClass")}
          />
        ))}
      </div>

      {group.get("note") && (
        <div className="pt-3 pl-4">
          <ReactMarkdown>{group.get("note")}</ReactMarkdown>
        </div>
      )}
    </>
  );
};

const OurTeamPreview = ({ entry }) => {
  const groups = entry.getIn(["data", "groups"]) || [];
  const title = entry.getIn(["data", "title"]) || "Our Team";

  return (
    <PreviewPage>
      <PreviewTitle>{title}</PreviewTitle>
      <div className="team-page">
        {groups.map((group, index) => (
          <TeamGroup key={`${group.get("groupTitle")}-${index}`} group={group} />
        ))}
      </div>
    </PreviewPage>
  );
};

export default OurTeamPreview;