import {CssBaseline, ThemeProvider} from "@mui/material"
import {createTheme} from "@mui/material/styles"
import { themeSettings } from "./theme"
import { useMemo } from "react"

function App() {
  const theme = useMemo(()=> createTheme(themeSettings),[])
  return (
    <>
      <div className="app">
        <ThemeProvider theme={theme}>
          <CssBaseline>
            
          </CssBaseline>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
