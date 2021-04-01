import './App.css';
import React from 'react';


import Footer from './Footer';
import Header from './Header';
import Horns from './HornForm';
import Main from './Main';
import SelectedBeast from './SelectedBeast';

import data from './data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      beast: {},
      data: data
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

  updateForFilter = (data) =>{
    this.setState({
      data: data
    });
  }

  render() {

    return (
      <div>
        <Header />
        <Horns
          data={this.state.data}
          updateForFilter={this.updateForFilter}
        />
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
