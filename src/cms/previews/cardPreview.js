import React from "react";

const getImagePath = (image) => {
  if (!image || image.startsWith("/") || /^https?:\/\//i.test(image)) {
    return image;
  }

  return `/${image}`;
};

const CardPreview = ({ entry }) => {
  const title = entry.getIn(["data", "title"]) || "Card title";
  const description = entry.getIn(["data", "description"]) || "";
  const buttonLabel = entry.getIn(["data", "buttonLabel"]) || "Learn more";
  const buttonUrl = entry.getIn(["data", "buttonUrl"]) || "#";
  const cardImage = getImagePath(entry.getIn(["data", "cardImage"]));

  return (
    <main id="preview" className="page-container">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="card border-secondary mb-3">
              {cardImage && (
                <img src={cardImage} alt={title} className="card-img" />
              )}

              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <a className="card-link btn btn-secondary" href={buttonUrl}>
                  {buttonLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardPreview;