import React from 'react';
import data from './data.json';
import Form from 'react-bootstrap/Form';

class Horns extends React.Component {


  numberOfHorns(event) {
    const selection = event.target.value;
    const hornedBeasts = data;
    const selectedNumberOfHorns = hornedBeasts.filter(d =>{
      return d.horns === selection;
    });
    this.props.updateForFilter(selectedNumberOfHorns);
  }

  render() {

    return (
      <div>
        <Form>
          <Form.Group >
            <Form.Label>Select the number of horns</Form.Label>
            <Form.Control id="horns"as="select"onChange={this.numberOfHorns}>
              <option value="">Select number of horns</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Horns;
