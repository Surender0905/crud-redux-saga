import {
  all,
  call,
  delay,
  fork,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { loadUsersFail, loadUsersSucess, LOAD_USER_START } from './action';
import { loadUsersApi } from './api';

function* fetchUser(action) {
  try {
    const res = yield call(loadUsersApi, action.payload);
    console.log(res, 'res');

    if (res.status === 200) {
      yield delay(500);

      yield put(loadUsersSucess(res));
    }
  } catch (error) {
    yield put(loadUsersFail(error));
  }
}

export function* onLoadUsers() {
  yield takeLatest(LOAD_USER_START, fetchUser);
}

const userSagas = [fork(onLoadUsers)];

export default function* rootSage() {
  yield all([...userSagas]);
}
