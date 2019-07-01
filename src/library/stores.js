import {writable} from 'svelte/store';

function post(endpoint, data = {}) {

  return fetch(endpoint, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'}
  }).then(r => r.json());
}

function query(params) {

  return Object
      .keys(params)
      .map(key => key + (params[key] ? '=' + params[key] : ''))
      .join('&');
};

function createAuth() {
  const {subscribe, set, update} = writable();
  async function login(credentials) {
    const user = await post('auth/login/', credentials);
    set({user});
    return user;
  };

  async function logout() {
    const response = await post('auth/logout');
    set({user: null});
    return response;
  };

  async function register(credentials) {
    return await post('auth/registration/', credentials);
  };

  async function save(credentials) {
    const user = await post('auth/save', credentials);
    set({user});
    return user;
  };

  async function get(endpoint, params = {}) {
    const url = await Object.keys(params).length === 0 ? endpoint : endpoint + '?' + query(params);
    return await post('auth/get', {url});
  };

  return {subscribe, login, logout, register, save, get};
}

export const auth = createAuth();
