import React from "react"
import { ThemeProvider } from "styled-components"
import "../styles/index.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import layoutStyles from "../styles/layout.module.scss"
import { useDarkMode, lightTheme, darkTheme } from "./AppTheme"
import { GlobalStyles } from "./globalStyles"

// TODO: The layout is being created each time a page is changed
// As a result the global theme is made each time, which is why it's refreshing and also not staying consistent
const Layout = props => {
  const [theme, themeToggle] = useDarkMode()

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
