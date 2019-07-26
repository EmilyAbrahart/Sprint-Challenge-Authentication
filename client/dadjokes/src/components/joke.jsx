import React from 'react';
import styled from 'styled-components';
import {color_light} from '../styles';

const JokeDiv = styled.div`
background: ${color_light};
padding: 0.5rem;
margin: 0.5rem;
`;

const Joke = (props) => {
  return (
    <JokeDiv>
      <p>{props.joke}</p>
    </JokeDiv>
  )
}

export default Joke;