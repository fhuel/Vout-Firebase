import React from 'react';
import './Poll.css';

import base from '../../base' // All the Firebase stuff
import PollItem from '../PollItem/PollItem'

class Poll extends React.Component {

  constructor() {
    super();

    // Initial States
    this.state = {
      title: "Fuck Yeah",
      creationDate: "12 Dicembre 2016",
      author: {id:0, name:"Jackson Pollock", avatarURL:"https://api.adorable.io/avatars/150/pierinho@adorable.io.png"},
      description: "This is a list of books we want to buy to keep in the Dinamo library. We currently have the budget to buy two, three books a month. For this reason we want to know which ones you woul like to have the most. Books on top of the list will be bought the next month.",
      items: [
                { id:0, title:"piero è uno che ne sa"},
                { id:1, title:"peeno e questo"},
                { id:2, title:"geeno dai su allora"}
              ]
    };

    // do this for internal functions
    this.interalFunction = this.interalFunction.bind(this);
  }

  componentDidMount() {
    const itemsRef = base.database().ref("polls/poll0/items");


    // This will re-render the app everytime this data changes on the server
    itemsRef.on('value', snap => {

      this.setState({
          items: snap.val()
      });

      //if items.count
    });

  }





  addAnItem(e){
    if (e.key === 'Enter') {
      const itemListRef = base.database().ref("polls/poll0/items");
      // the firebase call setState when it is changed ( in componentDidMount() )
      var newItemRef = itemListRef.push();
      newItemRef.set({
        id: e.key,
        title: e.target.value
      });
      // We've appended a new message to the message_list location.
      // var path = newItemRef.toString();
      e.target.value = "";
    }
  }



  removeAnItem(e){
    const itemListRef = base.database().ref("polls/poll0/items");
    //console.log(e.target);

    itemListRef.child(e.target.id).remove();
  }




  interalFunction(e) {
    //do stuff
    e.preventDefault();
    const pollId = 1;

    this.context.router.push(`/poll/${pollId}`);
    //this.context.router.transitionTo(`/poll/${pollId}`);
  }

  // Every component NEEDS AT LEAST a render method to function
  render() {

    const {items} = this.state;

    // here we will return some JSX
    return(
      <div className="poll">
        <h3>{this.state.title} - {this.props.param}</h3>

        <div className="author">
          <img src={this.state.author.avatarURL} alt={this.state.author.name}/>
          <span>
            Created by {this.state.author.name}<br/>
            {this.state.creationDate}
          </span>
        </div>

        <p>{this.state.description}</p>

        <ul>
        {/*items.map((item) => (
         <PollItem key={item.id} itemDetails={item} />
       ))*/}
        { Object.keys(items).map((key) =>
            <PollItem key={key}  id={key} itemDetails={items[key]} removeFunction={this.removeAnItem} />
        )}
       </ul>

       <input type="text" onKeyPress={ this.addAnItem }/>

       <br/><br/><br/><br/>

       <input type="text" ref={ (input) => {this.thisInputElement = input} } /> {/* how to make a REF*/}


       <br/>

       <a href="#" onClick={ this.interalFunction }>Launch interalFunction</a>

     </div>
    )
  }
}



Poll.contextTypes = {
  router: React.PropTypes.object
};

Poll.propTypes = {
  param: React.PropTypes.string
}


// We need to export it to be able to use it in other files
export default Poll;
