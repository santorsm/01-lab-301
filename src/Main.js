import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import HornedBeasts from './HornedBeasts.js';
import data from './data.json';

class Main extends React.Component{

  render(){
    return(
      <main>

        {
          data.map(item => <HornedBeasts title={item.title} imageUrl={item.image_url} alt={item.keyword} description={item.description} key={uuidv4()}/>)
        }

      </main>
    );
  }
}

export default Main;
