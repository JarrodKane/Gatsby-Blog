import { useState, useEffect } from "react"
const LOCAL_STORAGE_KEY = "jarrods.theme"

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light")

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  //  Needed to store locally otherwise each time we change the page it'll reset the theme back to default
  useEffect(() => {
    const themeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (themeJSON != null) setTheme(JSON.parse(themeJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(theme))
  }, [theme])

  return [theme, themeToggle]
}

export const lightTheme = {
  html: {
    body: "#FFF",
    text: "#363537",
    toggleBorder: "#FFF",
    background: "#363537",
  },
  a: { color: "blue" },
}
export const darkTheme = {
  body: " #45146d;",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#45146d",
}
