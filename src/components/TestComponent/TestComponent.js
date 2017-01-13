import React from 'react';
import './TestComponent.css';

class TestComponent extends React.Component {

  constructor() {
    super();

    // Initial States
    this.state = {
      storedData: {}
    };

    // do this for internal functions
    this.interalFunction = this.interalFunction.bind(this);
  }


  interalFunction(e) {
    //do stuff
    e.preventDefault();
    const pollId = 1;
    console.log(this.context);
    this.context.router.push(`/poll/${pollId}`);
    //this.context.router.transitionTo(`/poll/${pollId}`);
  }

  // Every component NEEDS AT LEAST a render method to function
  render() {
    // here we will return some JSX
    return(
      <div>
        {/* This is a fucking JSX comment !!! */}
        <h3>FUCK YEAH {this.props.param}</h3> {/* PROPS*/}
        <a href="#" onClick={ this.interalFunction }>Launch interalFunction</a> {/* internalFunction call*/}
        <input type="text" ref={ (input) => {this.thisInputElement = input} } /> {/* how to make a REF*/}
      </div>
    )
  }
}



TestComponent.contextTypes = {
  router: React.PropTypes.object
};

TestComponent.propTypes = {
  param: React.PropTypes.string
}


// We need to export it to be able to use it in other files
export default TestComponent;
