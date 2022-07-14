import { createContext } from "react"

export const THEME = {
    light : {
        background: "#ffffff",
        foreground: "#000000",
        backdrop: "#eeeeee",
    },
    dark : {
        background: "#222222",
        foreground: "#ffffff",
        backdrop: "#303030",
    }
}

export const ThemeContext = createContext(THEME.light)