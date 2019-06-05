import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    text:{
      // primary: "#fff",
      
      secondary: "#fff"
    },
    
    background: {
      default: "#fff"
    }
    
  },
  fontFamily: {
    primary: "\"IM Fell DW Pica SC\", serif",
  },
  typography: {
    useNextVariants: true,
    "fontWeightLight": 300,
  }, 
  // typography: {
  //   "fontFamily": "\"IM Fell DW Pica SC\", serif",
  //   // "fontSize": 20,
  //   // "lineHeight": 1.5,
  //   // "letterSpacing": 0.32,
  //   // useNextVariants: true,
  //   suppressDeprecationWarnings: true,
  // },
 
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
      <App />
  </MuiThemeProvider>, 
  document.getElementById('app')
)
// fontFamily: "\"IM Fell DW Pica SC\", serif",
    //  "fontFamily": "\"Libre Franklin\", sans-serif",
    // "fontFamily": "\"Cinzel\", serif",
    // "fontFamily": "\"Linden Hill\", serif",
    // "fontFamily": "\"Mouse Memoirs\", sans-serif",
    // "fontFamily": "\"Raleway\", sans-serif",
    // "fontFamily": "\"Muli\", sans-serif",
    // "fontFamily": "\"Sorts Mill Goudy\", serif",
    //  "fontFamily": "\"Cormorant\", serif"