export const LOAD_USER_START = 'LOAD_USER_START';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAIL = 'LOAD_USER_FAIL';

export const loadUsersStart = () => ({ type: LOAD_USER_START });

export const loadUsersSucess = (users) => ({
  type: LOAD_USER_SUCCESS,
  payload: users.data,
});

export const loadUsersFail = (message) => ({
  type: LOAD_USER_SUCCESS,
  payload: message,
});
