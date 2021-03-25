import React from 'react';



class HornedBeasts extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      numberOfClicks: null
    };
  }

  imageClicked = () => {
    console.log('image clicked!');
    this.setState({
      numberOfClicks: this.state.numberOfClicks + 1
    });
  }

  render() {
    return (
      <div className="beast">
        <h2 className="title">{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.alt} width="200" height="150" title={this.props.title} onClick={this.imageClicked}></img>
        <p className="description">{this.props.description}</p>
        <span onClick>{this.state.numberOfClicks}</span>
      </div>
    );
  }
}

export default HornedBeasts;

