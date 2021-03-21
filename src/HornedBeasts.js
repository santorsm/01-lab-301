import React from 'react';


// The HornedBeast component contains
// an <h2> that displays
//   - the title of the animal,
//   - an <img> element with src,
//   - alt and title attributes,
//   - a <p> that displays the description

class HornedBeasts extends React.Component {
  render() {
    return (
      <div className="beast">
        <h2 className="title">{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.alt} width="200" height="150" title={this.props.title}></img>
        <p className="description">{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeasts;

