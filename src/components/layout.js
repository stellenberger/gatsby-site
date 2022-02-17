import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { 
  TopNavigation,
} from '../components'
import * as classes from './layout.module.scss';
import { 
  CalaLlombards
} from '../images'

import ReactGa from 'react-ga'
import "./layout.css"

const Layout = ({ children }) => {
  const [background, setBackground] = useState(null)
  console.log(classes)
  const backgroundHeroImage = {
    backgroundImage: `url(${CalaLlombards})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  const backgroundColor = {
    backgroundColor: '#080935'
  }

  const styling = () => {
    if (window.location.pathname === '/') {
      return (
        setBackground(
          backgroundHeroImage
        )
      ) 
    } else {
      return (
        setBackground(
          backgroundColor
        )
      )
    }
  }
  useEffect(() => {
    styling()
    ReactGa.initialize('PUT YOUR GOOGLE ANALYTICS CODE HERE')

    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  const changeColor = (color) => {
    setBackground(color)
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div className={classes.App} style={background}>
      <TopNavigation changeColor={changeColor} backgroundHeroImage={backgroundHeroImage} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
