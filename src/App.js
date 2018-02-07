import React, { Component } from 'react';
import Header from "./components/Header";
import Cards from "./components/Cards";

import friendsCards from "./data.json";


class App extends Component{

state = { 
  friends: friendsCards,
  guessScore: 0,
  matchScore: 0,
  friendsMatchId: 0
}
componentDidMount(){
  this.setState({
    friendsMatchId: this.getRandomCardId(this.state.friends)
  });
}


updateScore = (friendsClicked) => {
  //if you match with a friend
  if (friendsClicked.id === this.state.friendsMatchId){
    // update friend to match score
    this.setState({ matchScore: this.state.matchScore + 1,
    friendsMatchId: this.getRandomCardId(this.state.friends)
  });
  } else {
    this.setState({
      guessScore: this.state.guessScore + 1
    });
  }
}
  getRandomCardId = (cards) => Math.floor(Math.random() * cards.length + 1);

  render() {
    return (
      <div className= "container">
        <Header guessScore={this.state.guessScore} matchScore= {this.state.matchScore} />
        
        {this.state.friends.map(buddy => 
          <Cards
          id = {buddy.id}
          image = {buddy.image}
          updateScore={this.updateScore}
           />
        )}
      </div>
    );
  }
}

export default App;
