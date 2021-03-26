import React from 'react';

// Header component - an <h1> with a title

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Gallery of Horned Beasts</h1>
        <h2>Click on the picture to vote for your favorites!</h2>
      </header>
    );
  }
}

export default Header;
