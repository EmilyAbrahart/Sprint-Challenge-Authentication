import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {FlexFunc, color_accent_secondary, Input, Button} from '../styles/index';

const RegistrationFormDiv = styled.div`
${FlexFunc('column', 'center', 'center')};
border: 2px solid ${color_accent_secondary};
border-radius: 2rem;
padding: 3rem;
margin: 2rem;
`
const RegistrationFormElement = styled.form`
${FlexFunc('column', 'center', 'center')};
`
const FormInput = styled.input`
${Input('300px')}
margin-bottom: 1rem;
`

const FormButton = styled.button`
${Button(color_accent_secondary, "white")}`


const RegistrationForm = () => {
	const usernameRef = React.createRef();
  const passwordRef = React.createRef();

	const register = () => {
		const userObj = {
			username: usernameRef.current.value,
      password: passwordRef.current.value,
		};

		axios
			.post('http://localhost:3300/api/register', userObj)
			.then()
			.catch(err => console.log(err));
	};

	return (
		<RegistrationFormDiv>
      <h1>Register</h1>
			<RegistrationFormElement onSubmit={register}>
				<FormInput
					type="text"
					name="username"
					placeholder="Username"
					ref={usernameRef}
				/>
				<FormInput
					type="password"
					name="password"
					placeholder="Password"
					ref={passwordRef}
				/>
				<FormButton>Login</FormButton>
			</RegistrationFormElement>
		</RegistrationFormDiv>
	);
};

export default RegistrationForm;