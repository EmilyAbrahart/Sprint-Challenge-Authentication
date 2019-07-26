import React from 'react';
import Joke from './joke';
import axiosWithAuth from '../authentication/axiosWithAuth'
import styled from 'styled-components';

const JokesDiv = styled.div`
overflow-y: scroll;
height: 800px;
`

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
      <JokesDiv>
        {this.state.jokes.map(joke => 
         <Joke {...joke} key={joke.id} />
        )}
      </JokesDiv>
    )
  }
}

export default Jokes;