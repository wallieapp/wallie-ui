import { React, useState } from 'react';

import Login from '../../components/Login';
import Loading from '../../components/Loading';

const LoginContainer = () => {
    const [isLoading, setIsLoading] = useState(false);

    return !isLoading ?
        <Loading/>
        : <Login/>
};

export default LoginContainer;