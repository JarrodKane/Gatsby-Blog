import { useState, useEffect } from "react"
const LOCAL_STORAGE_KEY = "jarrods.theme"

export const useDarkMode = props => {
  const [theme, setTheme] = useState("dark")
  //const [componentMounted, setComponentMounted] = useState(false)

  console.log(props)
  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(theme))
    console.log("called")
  }, [])

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    if (localTheme) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(theme))
    } else {
      setTheme("light")
      window.localStorage.setItem("theme", "light")
    }
  }, [theme])

  return [theme, themeToggle]
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
