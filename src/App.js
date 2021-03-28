import './App.css';
import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import SelectedBeast from './SelectedBeast';

import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: {}
    };
  }

  showModal = (index) =>{
    this.setState({
      showModal: true,
      beast: data[index]
    });
  }

  hideModal = () =>{
    this.setState({showModal: false});
  }

  render() {

    return (
      <div>
        <Header />
        <SelectedBeast showModal={this.showModal} hideModal={this.hideModal} beast={this.state.beast}/>

        {/* <Modal show={this.state.showModal}onHide={this.hideModal}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>{this.state.beast.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img src="" alt=""/>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.hideModal} >Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal> */}

        <Main data={data} showModal={this.showModal}/>
        <Footer />
      </div>
    );
  }
}

export default App;
