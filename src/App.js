import React from 'react';
import './App.css';
import Card from './components/Card'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super ()
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/brandonharris177')
      // .then(res => console.log(res)
      // )
      .then(res => this.setState({ user: res.data }),
      )
      .catch(err => console.log("error", 'Server Error')
      )
      axios.get('https://api.github.com/users/brandonharris177/followers')
      // .then(res => console.log(res)
      // )
      .then(res => this.setState({ followers: res.data }),
      )
      .catch(err => console.log("error", 'Server Error')
      );
  }

  render () {
    // console.log(this.state)
    return (
      <>
       <Card propsToCard = {this.state.user}/>
       {/* <FollowersCards propsToFollowers = {this.state.followers} */}
      </>
    );
  }
  
}

export default App;
