import {
  all,
  call,
  delay,
  fork,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {
  createUserFail,
  createUserSucess,
  CREATE_USER_START,
  loadUsersFail,
  loadUsersSucess,
  LOAD_USER_START,
} from './action';
import { createUserApi, loadUsersApi } from './api';

function* fetchUser(action) {
  try {
    const res = yield call(loadUsersApi, action.payload);

    if (res.status === 200) {
      yield delay(500);

      yield put(loadUsersSucess(res));
    }
  } catch (error) {
    yield put(loadUsersFail(error.res.data));
  }
}

function* createUserStart({ payload }) {
  console.log('payload', payload);
  try {
    const res = yield call(createUserApi, payload);

    console.log(res, 'res');

    if (res.status === 200) {
      yield put(createUserSucess(res.data));
    }
  } catch (error) {
    yield put(createUserFail(error.res.data));
  }
}

export function* onLoadUsers() {
  yield takeEvery(LOAD_USER_START, fetchUser);
}

export function* onCreateUser() {
  yield takeLatest(CREATE_USER_START, createUserStart);
}
const userSagas = [fork(onLoadUsers), fork(onCreateUser)];

export default function* rootSage() {
  yield all([...userSagas]);
}
