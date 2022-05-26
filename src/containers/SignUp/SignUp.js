import { get } from 'lodash';
import { toast } from 'react-toastify';
import { React, useState } from 'react';

import { register } from '../../services/auth';

import SignUp from '../../components/SignUp';

const SignUpContainer = props => {
    const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

    const onLoginClick = () => props.history.push('/login');

    const onRegisterClick = async ({ name, email, password, confirm_password }) => {
        if (password !== confirm_password) {
            toast.error('As senhas não coincidem', {
                position: 'bottom-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });

            return;
        }

        const response = await register({ name, email, password, confirm_password });

		setLoading(false);

		if (response.data && (response.data.status === 'success')) {
            toast.success('Conta criada com sucesso', {
                position: 'bottom-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true
            });

			props.history.push('/login');
		} else {
            const mappedErrorCodes = {
                INVALID_USER: 'Dados inválidos.'
            };

            const errorData = get(response.data, 'data');

            console.log(mappedErrorCodes[errorData]);

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

    return <SignUp
            error={error}
            loading={loading}
            onLoginClick={onLoginClick}
            onRegisterClick={onRegisterClick}
        />
};

export default SignUpContainer;