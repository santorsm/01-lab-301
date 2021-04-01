import React from 'react';

import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfClicks: 0
    };
  }

  imageClicked = () => {
    console.log('image clicked!');
    this.setState({
      numberOfClicks: this.state.numberOfClicks + 1
    });
    this.props.showModal(this.props.index);
  }

  render() {
    return (

      <Card className="beast" onClick={this.imageClicked}>
        <Card.Img variant="top" src={this.props.imageUrl} onClick={this.imageClicked}></Card.Img>
        <Card.Body>
          <Card.Title className="title" >{this.props.title}</Card.Title>
          <Card.Text className="description">
            {this.props.description}
          </Card.Text>
          <span onClick={this.imageClicked}> ♥️ {this.state.numberOfClicks}</span>
        </Card.Body>
      </Card>

    );
  }
}

export default HornedBeasts;

