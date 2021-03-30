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
      show: false,
      beast: {}
    };
  }

  showModal = (index) =>{
    this.setState({
      show: true,
      beast: data[index]
    });
  }

  hideModal = () =>{
    this.setState({
      show: false,
      beast: {}
    });
  }

  render() {

    return (
      <div>
        <Header />
        <SelectedBeast
          show={this.state.show}
          hideModal={this.hideModal}
          beast={this.state.beast}
        />
        <Main
          data={data}
          showModal={this.showModal}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
