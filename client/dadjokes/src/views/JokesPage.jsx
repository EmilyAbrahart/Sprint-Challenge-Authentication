import React from 'react';
import Jokes from '../components/jokes';
import styled from 'styled-components';
import {FlexFunc, Button, color_accent_secondary} from '../styles';

const JokesPageDiv = styled.div`
${FlexFunc('column', 'center', 'center')};
flex-wrap: wrap;
`
const LogoutButton = styled.button`
${Button(color_accent_secondary, "white")}
position: absolute;
top: 1rem;
left: 1rem;
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
      <LogoutButton onClick={logout}>Logout</LogoutButton>
    </JokesPageDiv>
  )
}

export default JokesPage;