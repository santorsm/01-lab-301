import React from 'react';

import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeasts from './HornedBeasts';



class Main extends React.Component{

  render(){
    console.log(this.props);
    return(
      <main>
        <CardColumns>
          {
            this.props.data.map((item, index) => <HornedBeasts title={item.title} imageUrl={item.image_url} alt={item.keyword} description={item.description} key={index} showModal={this.props.showModal} hideModal={this.props.hideModal}index={index}/>)
          }
        </CardColumns>
      </main>
    );
  }s
}

export default Main;
