import React from 'react';
import './App.css';
import Card from './components/Card'
import FollowersCards from './components/Followers'
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
    // console.log(this.state.user)
    // console.log(this.state.followers)
    return (
      <div className = "app-body">
       <Card propsToCard = {this.state.user}/>
       <FollowersCards propsToFollowers = {this.state.followers} />
      </div>
    );
  }
  
}

export default App;
