import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ButtonAppBar from './components/ButtonAppBar'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './components/Home/Home'
import Piano from './components/Piano/Piano'
import Code from './components/Code/Code'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faFacebookSquare, faInstagram, faGithub, faLinkedin)

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['"Rubik", sans-serif']
  },
  palette: {
    primary: {
      main: '#80deea'
    },
    secondary: {
      main: '#fff59d'
    }
  }
},
)
class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <MuiThemeProvider theme={theme}>
            <ButtonAppBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/piano" component={Piano} />
            <Route exact path="/code" component={Code} />
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
