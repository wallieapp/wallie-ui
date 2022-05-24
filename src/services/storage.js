export const saveSession = ({ id, name, email, token }) => {
	localStorage.setItem('id', id);
	localStorage.setItem('name', name);
	localStorage.setItem('email', email);
	localStorage.setItem('token', token);
};

export const isLogged = () => !!getToken();

export const logout = () => localStorage.clear();

export const getToken = () => localStorage.getItem('token');
