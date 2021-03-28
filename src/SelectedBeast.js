import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeasts extends React.Component {
  render(){
    return(
      <Modal show={this.state.showModal}onHide={this.state.hideModal}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.beast.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={this.state.beast.imageUrl} alt=""/>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.state.hideModal} >Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  }
}

export default SelectedBeasts;
