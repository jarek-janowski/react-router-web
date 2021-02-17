import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navigation from './Navigation.js'
import Hero from './Hero.js'
import About from './About.js'
import Footer from './Footer.js'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <header>
          <Navigation />
        </header>
        <main className="main">
          <section className="hero">
              <Hero />
          </section>
          <section className="about">
            <article>
              <About />
            </article>
          </section>
        </main>
        <footer >
          <Footer />
        </footer>
      </Router>
     );
  }
}
 
export default App;
