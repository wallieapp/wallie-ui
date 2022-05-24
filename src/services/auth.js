import client from './client';

export const authenticate = ({ email, password }) => client({
	method: 'post',
	url: '/auth/login',
	data: { email, password }
});