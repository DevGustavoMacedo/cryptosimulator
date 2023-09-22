import { createGlobalStyle } from 'styled-components'
import { theme } from './main'

type MyProps = {
  theme: typeof theme
}

const GlobalStyle = createGlobalStyle<MyProps>`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme.golden};
  }
  body {
    background-color: ${(props) => props.theme.primary};
  }
  .hide {
    display: none;
  }
  body, .react-datepicker__time-list {
    ::-webkit-scrollbar {
      width: 6px;
      height: 100%;
    }
    ::-webkit-scrollbar-track {
      background-color: #2d2705;
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.golden};
      border-radius: 25px;
    }
  }
  
  .react-datepicker__time-list::-webkit-scrollbar {
    width: 10px;
  }
`

export default GlobalStyle
