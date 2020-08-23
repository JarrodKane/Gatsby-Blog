import { useState, useEffect } from "react"
const LOCAL_STORAGE_KEY = "jarrods.theme"

export const useDarkMode = () => {
  const [theme, setTheme] = useState("dark")
  const [componentMounted, setComponentMounted] = useState(false)

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  //  Needed to store locally otherwise each time we change the page it'll reset the theme back to default
  useEffect(() => {
    const themeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (themeJSON != null) setTheme(JSON.parse(themeJSON))
  }, [])

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    if (localTheme) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(theme))
    } else {
      setTheme("light")
      window.localStorage.setItem("theme", "light")
    }
    setComponentMounted(true)
  }, [])

  return [theme, themeToggle, componentMounted]
}

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
}
export const darkTheme = {
  body: "#2f2f2f",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#2f2f2f",
  h1: "pink",
}

/*export const darkTheme = {
  body: "#2f2f2f",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#2f2f2f",
}
*/
