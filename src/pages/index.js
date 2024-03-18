import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, Link} from "gatsby"

import CardList from "../components/cards/cardList"
import Tagline from "../components/tagline"

export const IndexQuery = graphql`
query {
  home: markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
    frontmatter {
      taglineSection {
        text
        buttonLabel
        buttonUrl
      }      
    }
  },
  cards: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "card" } }
    },
    sort: {
      fields: frontmatter___date,
      order: DESC
    },
    limit: 4
  ) {
    edges {
      node {
        fields {
          cardImage
        }
        id
        frontmatter {
          title
          description
          buttonLabel
          buttonUrl
        }
      }
    }
  }
}
`

const IndexPage = ({data}) => {
  const tagline = data.home.frontmatter.taglineSection  
  const cards = data.cards.edges

  return (
    <Layout>
      <SEO title="Home" />
        <section className="cards-container">
          <CardList cards={cards} />
        </section>
        <section className="tagline-container">
          <div className="container">
            <div className="row">
              <div className="tagline col-md-8 offset-md-2">
                <Tagline text={tagline.text} />
              </div>
              <div className="cta-tagline col-md-2">
                <a className="btn btn-lg btn-primary text-dark" href={tagline.buttonUrl}>{tagline.buttonLabel}</a>
              </div>
            </div>
          </div>
        </section>              
    </Layout>
  )
}

export default IndexPage
