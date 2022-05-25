import { get } from 'lodash';
import { toast } from 'react-toastify';
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

            toast.error(error, {
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
		}
	};

    return <Login
            loading={loading}
            onLoginClick={onLoginClick}
            onSignUpClick={onSignUpClick}
            onForgotPasswordClick={onForgotPasswordClick}
        />
};

export default LoginContainer;