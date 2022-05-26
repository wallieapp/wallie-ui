import client from './client';

export const authenticate = ({ email, password }) => client({
	method: 'post',
	url: '/auth/login',
	data: { email, password }
});

export const register = ({ name, email, password, confirm_password }) => client({
	method: 'post',
	url: '/auth/register',
	data: { name, email, password, confirm_password }
});