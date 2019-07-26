import React from 'react';
import LoginForm from '../components/login';
import RegistrationForm from '../components/register';
import styled from 'styled-components';
import { FlexFunc } from '../styles';

const LoginPageDiv = styled.div`
  ${FlexFunc('column', 'center', 'center')}
  height: 100%;
`;

const FormsContainer = styled.div`
	${FlexFunc('row', 'center', 'center')}
`;

const TitleHeader = styled.h1`
font-size: 4rem;
`

const LoginPage = () => {
	return (
		<LoginPageDiv>
			<TitleHeader>Dad Jokes</TitleHeader>
			<FormsContainer>
				<RegistrationForm />
				<LoginForm />
			</FormsContainer>
		</LoginPageDiv>
	);
};

export default LoginPage;
