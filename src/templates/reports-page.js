import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import Title from '../components/title'
import {graphql, Link} from 'gatsby'
import ReactMarkdown from "react-markdown"

const Reports = ({data}) => {
  const {
    title,
    readershipMapDescription,
    googleDataStudioDescription
  } = data.markdownRemark.frontmatter

  // When we have markdown in the frontmatter, we need to process it
  // with ReactMarkdown (or something) or something similar.
  // When it's in the "html"/not frontmatter, we would "dangerouslySetInnerHTML"

  return (
    <Layout>
      <SEO title={title} />
      <div className="container pt-5 pb-5">
        <Title title={title} />
        
        <section className="cards-container">
          <h2 id="reports" className="mb-4">Usage Reports</h2>          
        </section>
        <section>
          <div id="readership-map" className="readership-map">
            <ReactMarkdown source={readershipMapDescription} />
            <div className="readership-map-embed">
              <iframe title="Readership Map" frameborder="0" height="650" width="100%" src="#"></iframe>
            </div>
          </div>
          <div className="google-data-studio-oa">
            <h2 id="oa-book-usage">Open Access Book Usage</h2>
            <p>This report is created by the <a href="https://openknowledge.community/projects/bad-project/" target="_blank" rel="noreferrer">Book Analytics Dashboard project</a> and represents usage across a number of different platforms. For more information or if you are encountering display issues, see <a href="https://mpub.atlassian.net/wiki/spaces/FPS/pages/66453810/UMP+EBC" target="_blank" rel="noreferrer">our FAQ</a></p>
            <div className="embed-responsive embed-responsive-1by1">
	  <iframe title="Open Access Book Usage" className="embed-responsive-item" src="#" allowfullscreen></iframe>
            </div>
          </div>

        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query reportsPage($id: String!) {
  	markdownRemark(id: {eq: $id}) {
      frontmatter{
        title
        readershipMapDescription
        googleDataStudioDescription
      }
    },
  }
`

export default Reports
