import { React } from 'react';

import Login from '../../components/Login';

const LoginContainer = props => {
	const onSignUpClick = () => props.history.push('/sign-up');

    return <Login
        onSignUpClick={onSignUpClick}
    />
};

export default LoginContainer;