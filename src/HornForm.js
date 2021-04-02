import React from 'react';

import Form from 'react-bootstrap/Form';

class Horns extends React.Component {


  numberOfHorns = event => {
    const selection = parseInt(event.target.value);
    if (selection === 0){
      this.props.updateForFilter(selection);
    } else {
      const selectedNumberOfHorns = this.props.data.filter(d => d.horns === selection);
      this.props.updateForFilter(selectedNumberOfHorns);
    }
  }

  render() {

    return (
      <div>
        <Form>
          <Form.Group >
            <Form.Label></Form.Label>
            <Form.Control id="horns"as="select"onChange={this.numberOfHorns}>
              <option value="">Select number of horns</option>
              <option value="0">View all</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Horns;
