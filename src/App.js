import React from 'react';
import './App.css';
import Card from './components/Card'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super ()
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/brandonharris177')
      // .then(res => console.log(res)
      // )
      .then(res => this.setState({ user: res.data }),
      console.log(this.state)
      )
      .catch(err => console.log("error", 'Server Error'));
  }

  render () {
    return (
      <>
       <Card propsToCard = {this.state}/>
      </>
    );
  }
  
}

export default App;
