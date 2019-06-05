import React from 'react'
import ReactDOM from 'react-dom'

import ThemeProvider from '@material-ui/styles/ThemeProvider'

import App from './routes'
import theme from './utils/theme'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
