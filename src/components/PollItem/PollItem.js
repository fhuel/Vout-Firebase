import React from 'react';
import './PollItem.css';

class PollItem extends React.Component {

  constructor(props) {
    super(props);

    // Initial States
    this.state = this.props.itemDetails;

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


  render() {
    console.log(this.props.id);
    return(
      <li className="pollItem">{this.state.title} <span id={this.props.id} onClick={this.props.removeFunction}> –</span></li>
    )
  }

}


PollItem.contextTypes = {
  router: React.PropTypes.object
};

PollItem.propTypes = {
  param: React.PropTypes.string
}


export default PollItem;
