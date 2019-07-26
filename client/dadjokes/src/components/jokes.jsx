import React from 'react';
import Joke from './joke';
import axiosWithAuth from '../authentication/axiosWithAuth'

class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      jokes: []
    }
  }

  getJokes = () => {
    axiosWithAuth()
    .get('http://localhost:3300/api/jokes')
    .then(res => {
      this.setState({
        jokes: res.data
      })
    })
    .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getJokes();
  }
  
  render() {
    return (
      <div>
        {this.state.jokes.map(joke => 
         <Joke {...joke} key={joke.id} />
        )}
      </div>
    )
  }
}

export default Jokes;