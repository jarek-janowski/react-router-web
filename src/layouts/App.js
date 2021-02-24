import React, { Component } from 'react';
// import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navigation from './Navigation'
// import About from '../pages/About'
import Footer from './Footer'
import Main from './Main'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <header>
          <Navigation />
        </header>
        <main className="main">
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
     );
  }
}
 
export default App;
