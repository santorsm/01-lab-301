import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import HornedBeasts from './HornedBeasts.js';
import { Data } from './Data.js';

// The Main component
// - render at least two copies of a component called HornedBeasts
// - pass title, imageUrl, and description into each HornedBeast component
//   - For the purpose of today’s lab, you can pass whatever title, url and description that you want into each HornedBeast commponent

class Main extends React.Component{
  render(){
    return(
      <div>

        {
          Data.map(item => <HornedBeasts title={item.title} imageUrl={item.image_url} alt={item.keyword} description={item.description} key={uuidv4()}/>)
        }

      </div>
    );
  }
}

export default Main;
