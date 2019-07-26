import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {FlexFunc, Button, Input, color_accent} from '../styles';

const LoginFormDiv = styled.div`
${FlexFunc('column', 'center', 'center')};
border: 2px solid ${color_accent};
border-radius: 2rem;
padding: 3rem;
margin: 2rem;
`
const LoginFormElement = styled.form`
${FlexFunc('column', 'center', 'center')};
`
const FormInput = styled.input`
${Input('300px')}
margin-bottom: 1rem;
`

const FormButton = styled.button`
${Button(color_accent, "white")}`

const LoginForm = event => {
	const usernameRef = React.createRef();
	const passwordRef = React.createRef();

	const login = (event) => {
		const loginObj = {
			username: usernameRef.current.value,
			password: passwordRef.current.value
		};
		event.preventDefault();
		axios
			.post('http://localhost:3300/api/login', loginObj)
			.then(res => {
				console.log(res.data.token);
				localStorage.setItem('token', res.data.token);
				window.location.reload();
			})
			.catch(err => console.log(err));
	};

	return (
		<LoginFormDiv>
			<h1>Login</h1>
			<LoginFormElement onSubmit={login}>
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
			</LoginFormElement>
		</LoginFormDiv>
	);
};

export default LoginForm;
