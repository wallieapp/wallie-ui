import { React, useState } from 'react';

import SignUp from '../../components/SignUp';

const SignUpContainer = props => {
    const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

    return <SignUp
            error={error}
            loading={loading}
        />
};

export default SignUpContainer;