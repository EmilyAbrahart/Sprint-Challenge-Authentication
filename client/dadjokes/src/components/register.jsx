import React from 'react';
import axios from 'axios';

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
		<div>
      <h1>Register</h1>
			<form onSubmit={register}>
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
			</form>
		</div>
	);
};

export default RegistrationForm;