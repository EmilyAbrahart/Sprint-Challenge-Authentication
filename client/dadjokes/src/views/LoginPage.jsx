import React from 'react';
import LoginForm from '../components/login';
import RegistrationForm from '../components/register'


const LoginPage = () => {
  return (
    <div>
      <h1>Dad Jokes</h1>
      <RegistrationForm />
      <LoginForm />
    </div>
  )
}

export default LoginPage;