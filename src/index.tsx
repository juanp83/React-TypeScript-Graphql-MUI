import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import Router from './Router'
import './index.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import reportWebVitals from './reportWebVitals'

const themeOptions = {
  palette: {
    primary: {
      main: '#303f9f',
      light: '#666ad1',
      dark: '#001970',
    },
    secondary: {
      main: '#ffb300',
      light: '#ffe54c',
      dark: '#c68400',
    },
    text: {
      primary: '#262938',
      disabled: '#40445d',
    },
    grey: {
      50: '#f9f9fa',
      100: '#f3f3f6',
      200: '#eaeaf0',
      300: '#d8dae3',
      400: '#adb0c3',
      500: '#868aa8',
      600: '#585d81',
      700: '#494d6b',
      800: '#323548',
      900: '#191a24',
      A100: '#f3f3f6',
      A200: '#eaeaf0',
      A400: '#adb0c3',
      A700: '#494d6b',
    }
  },
  typography: {
    h2: {
      fontSize: 24,
      fontWeight: 400,
      color: '#262938',
    },
    h3: {
      fontSize: 18,
      fontWeight: 400,
      color: '#262938',
    },
    body1: {
      color: '#262938',
    }
  },
}

let theme = createTheme(themeOptions);

theme = responsiveFontSizes(theme);

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
