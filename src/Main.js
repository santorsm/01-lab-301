import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeasts from './HornedBeasts';
import data from './data.json';

class Main extends React.Component{

  render(){
    return(
      <main>
        <CardColumns>
          {
            data.map(item => <HornedBeasts title={item.title} imageUrl={item.image_url} alt={item.keyword} description={item.description} key={uuidv4()}/>)
          }
        </CardColumns>
      </main>
    );
  }
}

export default Main;
