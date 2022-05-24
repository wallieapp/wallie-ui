import { get } from 'lodash';
import { React, useState } from 'react';

import Login from '../../components/Login';

import { authenticate } from '../../services/auth.js';
import { saveSession } from '../../services/storage';

const LoginContainer = props => {
    const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const onSignUpClick = () => props.history.push('/sign-up');

	const onForgotPasswordClick = () => props.history.push('/forgot-password');

	const onLoginClick = async ({ email, password }) => {
		setLoading(true);

		const response = await authenticate({ email, password });
        const responseData = get(response.data, 'data');

        console.log(responseData);

		setLoading(false);

		if (response.data && (response.data.status === 'success' && responseData.token)) {
			saveSession(responseData);
			props.history.push('/home');
		} else {
            const mappedErrorCodes = {
                NO_RESULTS: 'Credenciais inválidas, tente novamente.'
            };

            const errorData = get(response.data, 'data');

			setError(mappedErrorCodes[errorData] || 'Algum erro aconteceu, tente novamente mais tarde.');
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