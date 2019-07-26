import React from 'react';
import LoginPage from './views/LoginPage';
import JokesPage from './views/JokesPage';
import { Route, Redirect } from 'react-router-dom';
import PrivateRoute from './authentication/PrivateRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      	<Route
				path="/login"
				render={() => {
					if (!localStorage.getItem('token')) {
						return <LoginPage />;
					}
					return <Redirect exact to="/" />;
				}}
			/>
			<PrivateRoute path="/" component={JokesPage} />
    </div>
  );
}

export default App;
