import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import Title from '../components/title'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'

const TeamMember = ({ member }) => (
  <div className={`name-card mb-3 ${member.columnClass || 'col-md-4'}`}>
    <span className="image">
      <img
        className={member.imgFluid ? 'img-fluid' : undefined}
        src={member.image}
        alt={`Portrait of ${member.name}`}
      />
    </span>
    <strong className="navigo">{member.name}</strong>
    <span className="title">{member.role}</span>
    {member.subRole && (
      <span className="title font-italic">{member.subRole}</span>
    )}
  </div>
)

const TeamGroup = ({ group }) => (
  <>
    <h2>{group.groupTitle}</h2>
    {group.subtitle && <p><em>{group.subtitle}</em></p>}
    <div className="row">
      {group.members.map((member, i) => (
        <TeamMember key={i} member={{ ...member, columnClass: group.columnClass }} />
      ))}
    </div>
    {group.note && (
      <div className="pt-3 pl-4">
        <ReactMarkdown>{group.note}</ReactMarkdown>
      </div>
    )}
  </>
)

const OurTeam = ({ data }) => {
  const { title, groups } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={title} />
      <div className="container pt-5 pb-5">
        <Title title={title} />
        <div className="team-page">
          {groups.map((group, i) => (
            <TeamGroup key={i} group={group} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ourTeamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        groups {
          groupTitle
          subtitle
          columnClass
          note
          members {
            name
            role
            subRole
            image
            imgFluid
          }
        }
      }
    }
  }
`

export default OurTeam
