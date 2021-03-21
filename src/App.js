import './App.css';
import React from 'react';

import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';

class App extends React.Component {
  render() {
    return (<div>
      <Header />
      <Main />
      <Footer />
    </div>);
  }

}

export default App;



// Your App component should render a Header, Footer and Main component



// Your Footer component needs to contain your name as the author.

// The Main component needs to render at least two copies of a component called HornedBeasts.
