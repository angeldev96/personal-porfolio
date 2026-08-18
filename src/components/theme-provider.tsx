"use client"

import * as React from "react"
import { flushSync } from "react-dom"

// The View Transitions API is not in the TS DOM lib shipped with this project.
declare global {
  interface Document {
    startViewTransition?: (callback: () => void) => {
      finished: Promise<void>
      ready: Promise<void>
      updateCallbackDone: Promise<void>
      skipTransition: () => void
    }
  }
}

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState)

function resolveTheme(theme: Theme) {
  if (theme !== "system") return theme

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function applyTheme(theme: Theme) {
  const root = window.document.documentElement

  root.classList.remove("light", "dark")
  root.classList.add(resolveTheme(theme))
}

/**
 * Whether the "polygon-gradient" reveal can run: the browser supports the View
 * Transitions API and the visitor has not asked for reduced motion.
 */
function canAnimateThemeChange() {
  return (
    typeof document !== "undefined" &&
    typeof document.startViewTransition === "function" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "portfolio-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(
    () => (typeof window !== "undefined" && (localStorage.getItem(storageKey) as Theme)) || defaultTheme
  )

  React.useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const value = React.useMemo(
    () => ({
      theme,
      setTheme: (nextTheme: Theme) => {
        localStorage.setItem(storageKey, nextTheme)

        // The class swap has to happen inside the transition callback so the
        // browser can snapshot the old and the new theme around it.
        const commit = () => {
          flushSync(() => setTheme(nextTheme))
          applyTheme(nextTheme)
        }

        if (!canAnimateThemeChange()) {
          setTheme(nextTheme)
          return
        }

        document.startViewTransition?.(commit)
      },
    }),
    [theme, storageKey],
  )

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
