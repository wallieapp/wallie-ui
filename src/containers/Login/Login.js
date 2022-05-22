import { React, useState } from 'react';

import Login from '../../components/Login';

import { authenticate } from '../../services/auth.js';
import { saveSession } from '../../services/storage';

const LoginContainer = props => {
    const [error, setError] = useState();
	const [loading, setLoading] = useState(false);

	const onSignUpClick = () => props.history.push('/sign-up');

	const onForgotPasswordClick = () => props.history.push('/forgot-password');

	const onLoginClick = async ({ email, password }) => {
		setLoading(true);

		const { error, data } = await authenticate({ email, password });

        console.log(error, data)

		setLoading(false);

		if (data) {
			saveSession(data);
			props.history.push('/home');
		} else {
			setError(error.message);
		}
	};

    return <Login
            error={error}
            loading={loading}
            onLoginClick={onLoginClick}
            onSignUpClick={onSignUpClick}
            onForgotPasswordClick={onForgotPasswordClick}
    />
};

export default LoginContainer;