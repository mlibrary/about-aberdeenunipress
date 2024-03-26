import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import Title from '../components/title'
import {graphql} from 'gatsby'

const OurTeam = ({data}) => {
  const title = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html
  return (
    <Layout>
      <SEO title={title} />
      <div className="container pt-5 pb-5">
      <Title title={title} />
      <div className="team-page">
        <h2>Aberdeen University Press Team</h2>
        <div className="row">
                <div className="name-card mb-3 col-md-4">
                    <span className="image">
                        <img className="img-fluid" src="/assets/francis-300px.png" alt="Portrait photo of Emma Francis" />
                    </span>
                    <strong className="navigo">Emma Francis</strong>
                    <span className="title">Aberdeen University Press Manager</span>
                </div>
                <div className="name-card mb-3 col-md-4">
                    <span className="image">
                        <img src="/assets/hynes-300px.png" alt="Portrait photo of Sandra Hynes" />
                    </span>
                    <strong className="navigo">Sandra Hynes</strong>
                    <span className="title">Aberdeen University Press Administrator</span>
                </div>
                <div className="name-card mb-3 col-md-4">
                    <span className="image">
                        <img src="/assets/jonesreid-300px.png" alt="Portrait photo of Varina Jones-Reid" />
                    </span>
                    <strong className="navigo">Varina Jones-Reid</strong>
                    <span className="title">Open Research & Metadata Assistant</span>
                </div>
                <p className="pt-3 pl-4">Contact us: <a href="mailto:aup@abdn.ac.uk">aup@abdn.ac.uk</a></p>
        </div>
        <h2>AUP Executive Board</h2>
        <div className="row">
                <div className="name-card mb-3 col-md-3">
                    <span className="image">
                        <img className="img-fluid" src="/assets/avatar-person.svg" alt="" />
                    </span>
                    <strong className="navigo">Brian Henderson</strong>
                    <span className="title">Chair, Director of Digital and Information Services</span>
                </div>
                <div className="name-card mb-3 col-md-3">
                    <span className="image">
                        <img src="/assets/bains-300px.png" alt="Portrait photo of Simon Bains" />
                    </span>
                    <strong className="navigo">Simon Bains</strong>
                    <span className="title">University Librarian</span>
                </div>
                <div className="name-card mb-3 col-md-3">
                    <span className="image">
                        <img src="/assets/avatar-person.svg" alt="" />
                    </span>
                    <strong className="navigo">Marlis Barraclough</strong>
                    <span className="title">Research Policy and REF Manager</span>
                </div>
                <div className="name-card mb-3 col-md-3">
                    <span className="image">
                        <img src="/assets/brown-300px.png" alt="Portrait photo of Michael Brown" />
                    </span>
                    <strong className="navigo">Michael Brown</strong>
                    <span className="title">Chair in Irish, Scottish and Enlightenment History</span>
                </div>                
        </div>
        <div className="row">
                <div className="name-card mb-3 col-md-4">
                    <span className="image">
                        <img className="img-fluid" src="/assets/ducato-200px.png" alt="Portrait photo of Rossana Ducato" />
                    </span>
                    <strong className="navigo">Rossana Ducato</strong>
                    <span className="title">Lecturer in Law</span>
                </div>
                <div className="name-card mb-3 col-md-4">
                    <span className="image">
                        <img src="/assets/francis-300px.png" alt="Portrait photo of Emma Francis" />
                    </span>
                    <strong className="navigo">Emma Francis</strong>
                    <span className="title">Aberdeen University Press Manager & Open Research Manager</span>
                </div>
                <div className="name-card mb-3 col-md-4">
                    <span className="image">
                        <img src="/assets/halfpenny-300px.png" alt="Portrain photo of Susan Halfpenny" />
                    </span>
                    <strong className="navigo">Susan Halfpenny</strong>
                    <span className="title">Head of Research and Learning Information Services</span>
                </div>
                              
        </div>
        <h2>Academic Advisory Board</h2>
        <p><em>For the period 2022-2025</em></p>
        <div className="row">
                <div className="name-card mb-3 col-md-4">
                    <span className="image">
                        <img className="img-fluid" src="/assets/brown-300px.png" alt="Portrait photo of Michael Brown" />
                    </span>
                    <strong className="navigo">Michael Brown</strong>
                    <span className="title">Chair, School of Divinity, History, Philosophy and Art History</span>
                </div>
                <div className="name-card mb-3 col-md-4">
                    <span className="image">
                        <img src="/assets/beaney-300px.png" alt="Portrait photo of Michael Beaney" />
                    </span>
                    <strong className="navigo">Michael Beaney</strong>
                    <span className="title">School of Divinity, History, Philosophy and Art History</span>
                </div>
                <div className="name-card mb-3 col-md-4">
                    <span className="image">
                        <img src="/assets/bains-300px.png" alt="Portrait photo of Simon Baines" />
                    </span>
                    <strong className="navigo">Simon Bains</strong>
                    <span className="title">University Librarian</span>
                </div>                
        </div>
        <div className="row">
                <div className="name-card mb-3 col-md-4">
                    <span className="image">
                        <img className="img-fluid" src="/assets/dilley-300px.png" alt="Portrait photo of Andrew Dilley" />
                    </span>
                    <strong className="navigo">Andrew Dilley</strong>
                    <span className="title">Chair of the Friends of Aberdeen University Library, 
School of Divinity, History, Philosophy and Art History</span>
                </div>
                <div className="name-card mb-3 col-md-4">
                    <span className="image">
                        <img className="img-fluid" src="/assets/francis-300px.png" alt="Portrait photo of Emma Francis" />
                    </span>
                    <strong className="navigo">Emma Francis</strong>
                    <span className="title">Aberdeen University Press Manager</span>
                </div>
                <div className="name-card mb-3 col-md-4">
                    <span className="image">
                        <img src="/assets/moran-300px.png" alt="Portrait photo of Clare Moran" />
                    </span>
                    <strong className="navigo">Clare Moran</strong>
                    <span className="title">School of Law</span>
                </div>                
        </div>
        <div className="row">
                <div className="name-card mb-3 col-md-4">
                    <span className="image">
                        <img className="img-fluid" src="/assets/morimoto-300px.png" alt="Portrait photo of Juliano Morimoto" />
                    </span>
                    <strong className="navigo">Juliano Morimoto</strong>
                    <span className="title">School of Natural and Computing Sciences</span>
                </div>
                <div className="name-card mb-3 col-md-4">
                    <span className="image">
                        <img src="/assets/schulz-300px.png" alt="Portrait photo of Rainer Schulz" />
                    </span>
                    <strong className="navigo">Rainer Schulz</strong>
                    <span className="title">Business School</span>
                </div>
                <div className="name-card mb-3 col-md-4">
                    <span className="image">
                        <img src="/assets/shanks-300px.png" alt="Portrait photo of Rachel Shanks" />
                    </span>
                    <strong className="navigo">Rachel Shanks</strong>
                    <span className="title">School of Education</span>
                </div>                
        </div>
      </div>
        
        
      </div>
    </Layout>
  )
}

export const query = graphql`
query ourTeamPage($id: String!) {
	markdownRemark(id: {eq: $id}) {
    html
    frontmatter{
      title
    }
  }
}
`

export default OurTeam