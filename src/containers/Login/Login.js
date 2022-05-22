import { useState } from 'react';

import Login from '../../components/Login';
import Loading from '../../components/Loading';

const LoginContainer = () => {
    const [isLoading, setIsLoading] = useState(false);

    return isLoading ?
        <Loading width={100} height='100vh'/>
        : <Login/>
};

export default LoginContainer;