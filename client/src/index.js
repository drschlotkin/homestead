import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  fontFamily: {
    primary: "\"IM Fell DW Pica SC\", serif",
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
      <App />
  </MuiThemeProvider>, 
  document.getElementById('app')
)