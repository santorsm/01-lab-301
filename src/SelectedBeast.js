import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './SelectedBeast.css';

class SelectedBeasts extends React.Component {
  render(){
    return(
      <Modal show={this.props.show} onHide={this.props.hideModal}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.beast.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={this.props.beast.image_url} alt=""/>
            <br />
            <br />
            <p>{this.props.beast.description}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hideModal} >Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  }
}

export default SelectedBeasts;
