import React from 'react';

const TestStatelessFunction = (props) => {

  return(
    <div>
      {/* NOTICE THAT YOU DON'T USE THIS.PROPS, JUST PROPS !!! */}
      <h3>FUCK YEAH {props.param}</h3>
    </div>
  )

}
 export default TestStatelessFunction;
