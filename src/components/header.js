import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "../styles/header.module.scss"
import styled from "styled-components"
//import "../styles/header.module.scss"

const Header = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const light = `#000000`
  const dark = `#ffff`
  const Title = styled(props => <Link {...props} />)`
    color: ${props.theme === "dark" ? dark : light};
    font-size: 3rem;
    text-decoration: none;
  `

  return (
    <header className={headerStyles.header}>
      <button onClick={props.themeToggle}>Change Theme</button>
      <h1>
        <Title to="/">{data.site.siteMetadata.title}</Title>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            {" "}
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              exact
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
