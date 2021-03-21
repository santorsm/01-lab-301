import React from 'react';

import HornedBeasts from './HornedBeasts.js';

// The Main component
// - render at least two copies of a component called HornedBeasts
// - pass title, imageUrl, and description into each HornedBeast component
//   - For the purpose of today’s lab, you can pass whatever title, url and description that you want into each HornedBeast commponent

class Main extends React.Component{
  render(){
    return(
      <div>
        <h2>Here are the Horned Beasts</h2>
        <HornedBeasts title="Ahab pursues Moby-Dick" imageUrl="https://www.nprillinois.org/sites/wuis/files/styles/x_large/public/201606/moby-dick.jpg" alt="Harpooneer" description="Towards thee I roll, thou all-destroying but unconquering whale; to the last I grapple with thee; from hell's heart I stab at thee; for hate's sake I spit my last breath at thee."/>

        <HornedBeasts title="Moby Dick crushes boat" imageUrl="https://s-usih.org/wp-content/uploads/2013/10/Moby_Dick_2.png" alt="Whale captures rowboat in mouth" description="Yummm"/>
      </div>
    );
  }
}

export default Main;


