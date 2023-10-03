import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './GlobalStyle'
import { ThemeProvider } from 'styled-components'

export const theme = {
  primary: '#000',
  secondary: 'rgba(0, 0, 0, 0.6)',
  golden: '#e2c219',
  golden2: 'rgba(226, 194, 25, 0.2)',
  green: '#32cd32',
  red: '#e92929',
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
