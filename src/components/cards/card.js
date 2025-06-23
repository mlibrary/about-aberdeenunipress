import React from "react"
import {Link} from "gatsby"
// import Img from "gatsby-image"

const Card = ({cardImage, card}) => {
  const {
    title,
    description,
    buttonLabel,
    buttonUrl
  } = card

  return (
    <div className="col-lg-3">
      <div className="card border-secondary mb-3">      
        <img src={cardImage} alt={`${title}`} className="card-img" />
        <div className="card-body">       
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{description}</p>
            {
              buttonUrl.startsWith("/")
              ? <Link className="card-link btn btn-secondary" to={buttonUrl}>{buttonLabel}</Link>
              : <a className="card-link btn btn-secondary" href={buttonUrl}>{buttonLabel}</a>
            }       
        </div>
      </div>
    </div>
  )
}

export default Card
