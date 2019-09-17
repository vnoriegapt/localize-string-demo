import React from 'react';

export function Home (props) {
  const { lan } = props;
  return(
    <div>
      {lan && (<div>
        <p>- {lan.how} -</p>
        <p>- {lan.boiledEgg} -</p>
        <p>- {lan.softBoiledEgg} -</p>
        <p>- {lan.choice} -</p>
        <p>- {lan.fridge.egg} -</p>
        <p>- {lan.fridge.milk} -</p>
      </div>)}
    </div>
  );
}