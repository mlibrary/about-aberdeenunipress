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
          <section className="col-md-4 contact">
            <a href="/" className="logo navigo">
              <img src="/assets/aberdeen.svg" height="75px" width="auto" alt="" />
            </a>
            <span className="d-block">Aberdeen, UK</span>
            <span className="d-block"><a className="text-primary" href="mailto:aup@abdn.ac.uk">aup@abdn.ac.uk</a></span>                        
            <span className="d-block">
              <a className="twitter" href="https://twitter.com/AperioUVA"><svg height="16px" width="auto" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="#00cccf"/>
</svg></a>
              <a className="bluesky" href=""><svg width="20px" height="20px" viewBox="0 0 20 20" fill="#00cccf" xmlns="http://www.w3.org/2000/svg">
 <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" fill="#00ccc"/>
</svg></a>            
            </span>
          </section>
          <section className="col-md-3">
            <ul className="list-unstyled pt-4">
              <li><a className="text-light navigo" href="/about">About</a></li>
              <li><a className="text-light navigo" href="/peer-review">Peer Review</a></li>
              <li><a className="text-light navigo" href="/research-integrity">Research Integrity</a></li>
              <li><a className="text-light navigo" href="/assets/AUP_Author_Style_Guide_v2.docx">Style Guide</a></li>
            </ul>
          </section>
        </div>
        <div className="row mt-3">
          <div className="col-md-8">
          <span className="text-light d-block mb-3 navigo font-weight-normal">© {year}, Aberdeen University Press · <a className="text-light" href="https://fulcrum.org/accessibility/">Accessibility</a> · <a className="text-light" href="https://fulcrum.org/preservation">Preservation</a> · <a className="text-light" href="https://fulcrum.org/privacy">Privacy</a> · <a className="text-light" href="https://fulcrum.org/terms">Terms</a></span>    
          </div>
          <div className="col-md-4 text-right">
            <span className="text-white">Powered by</span> <a href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>  
    </footer>
  )
}

export default Footer
