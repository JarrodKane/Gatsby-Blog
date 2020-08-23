import React from "react"
import { ThemeProvider } from "styled-components"
import "../styles/index.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import layoutStyles from "../styles/layout.module.scss"
import { useDarkMode, lightTheme, darkTheme } from "./AppTheme"
import { GlobalStyles } from "./globalStyles"

const Layout = props => {
  const [theme, themeToggle, componentMounted] = useDarkMode()
  if (!componentMounted) {
    return <div />
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className={layoutStyles.background}>
        <div className={layoutStyles.layer}>
          <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
              <Header themeToggle={themeToggle} theme={theme} />
              {props.children}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Layout
