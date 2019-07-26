import React from 'react';
import Jokes from '../components/jokes';
import styled from 'styled-components';
import {FlexFunc} from '../styles';

const JokesPageDiv = styled.div`
${FlexFunc('row', 'center', 'center')};
flex-wrap: wrap;
`

const JokesPage = () => {
  const logout = () => {
		localStorage.removeItem('token');
		window.location.reload();
	};
  return (
    <JokesPageDiv>
      <h1>Dad Jokes</h1>
      <Jokes />
      <button onClick={logout}>Logout</button>
    </JokesPageDiv>
  )
}

export default JokesPage;