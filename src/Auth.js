import React from 'react';
import { Route } from 'react-router-dom';

import LoginContainer from './containers/Login';

const Auth = () => (
	<>
		<Route exact path="/" component={LoginContainer} />
		<Route exact path="/login" component={LoginContainer} />
	</>
);

export default Auth;