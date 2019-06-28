import * as api from '../../library/api';

export function post(req, res) {
	const user = req.body;

	api.post('auth/login', { user }).then(response => {
		if (response.user) req.session.user = response.user;
		res.setHeader('Content-Type', 'application/json');

		res.end(JSON.stringify(response));
	});
}