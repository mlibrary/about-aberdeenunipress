import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

export const titleQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
}
`

const Footer = () => {
    const data = useStaticQuery(titleQuery)
    const {title} = data.site.siteMetadata
    const now = new Date()
    const year = now.getFullYear()

    return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row justify-content-between">
          <section className="col-md-6 contact">
            <a href="/" className="logo navigo">
              <img src="/assets/aberdeen.svg" height="75px" width="auto" alt="" />
            </a>
            <span className="d-block">Aberdeen, UK</span>
            <span className="d-block"><a className="text-primary" href="mailto:aup@abdn.ac.uk">aup@abdn.ac.uk</a></span>                        
            <span className="d-block pt-2">
              <a className="twitter pr-2" href="https://twitter.com/AbdnUniPress"><svg height="16px" width="auto" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="#00cccf"/>
</svg></a>
              <a className="youtube" href="https://www.youtube.com/playlist?list=PLmKrFyUVrIH4PYOSdsGrrZXzgDZia_WQL"><img src="/assets/youtube-light.svg" alt="YouTube" height="18px" width="auto" /></a>            
            </span>
          </section>
          <section className="col-md-3">
            <ul className="list-unstyled pt-3">
              <li><a className="text-light navigo" href="/about">About</a></li>
              <li><a className="text-light navigo" href="https://fulcrum.org/aberdeenunipress">Books</a></li>
              <li><a className="text-light navigo" href="https://journals.aberdeenunipress.org/journals">Journals</a></li>
              <li><a className="text-light navigo" href="/our-principles">Our Guiding Principles</a></li>
              <li><a className="text-light navigo" href="/proposal-books">Book Proposals</a></li>
              <li><a className="text-light navigo" href="/proposal-book-series">Book Series Proposals</a></li>
              <li><a className="text-light navigo" href="/proposal-journals">Journals Proposals</a></li>
              <li><a className="text-light navigo" href="/contact">Contact</a></li>
            </ul>
          </section>
          <section className="col-md-3">
            <ul className="list-unstyled pt-3">
              <li><a className="text-light navigo" href="/authorship">Authorship Guidelines</a></li>
              <li><a className="text-light navigo" href="/peer-review">Peer Review</a></li>
              <li><a className="text-light navigo" href="/research-integrity">Research Integrity</a></li>
              <li><a className="text-light navigo" href="/assets/AUP_Author_Style_Guide_v2.docx">Style Guide</a></li>
            </ul>
          </section>
        </div>
        <div className="row mt-3">
          <div className="col-md-8">
          <span className=" copyright text-light d-block mb-3 navigo font-weight-normal">© {year}, Aberdeen University Press · <a className="text-light" href="https://fulcrum.org/accessibility/">Accessibility</a> · <a className="text-light" href="https://fulcrum.org/preservation">Preservation</a> · <a className="text-light" href="https://fulcrum.org/privacy">Privacy</a> · <a className="text-light" href="https://fulcrum.org/terms">Terms</a></span>    
          </div>
          <div className="col-md-4 text-right powered">
            <span className="text-white">Powered by</span> <a href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>  
    </footer>
  )
}

export default Footer
