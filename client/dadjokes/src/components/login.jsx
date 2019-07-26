import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {FlexFunc} from '../styles';

const LoginFormDiv = styled.div`
${FlexFunc('column', 'center', 'center')};
`
const LoginFormElement = styled.form`
${FlexFunc('column', 'center', 'center')};
`
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
				<input
					type="text"
					name="username"
					placeholder="Username"
					ref={usernameRef}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					ref={passwordRef}
				/>
				<button>Login</button>
			</LoginFormElement>
		</LoginFormDiv>
	);
};

export default LoginForm;
