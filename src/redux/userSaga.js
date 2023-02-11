import {
  all,
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {
  createUserFail,
  createUserSucess,
  CREATE_USER_START,
  deleteUserFail,
  deleteUserSucess,
  DELETE_USER_START,
  loadUsersFail,
  loadUsersSucess,
  LOAD_USER_START,
  updateUserStart,
  UPDATE_USER_START,
} from './action';
import {
  createUserApi,
  deleteUserApi,
  loadUsersApi,
  updateUserApi,
} from './api';

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
  try {
    const res = yield call(createUserApi, payload);

    if (res.status === 201) {
      yield put(createUserSucess(res.data));
    }
  } catch (error) {
    yield put(createUserFail(error.res.data));
  }
}

function* deleteUserSaga(userId) {
  try {
    const res = yield call(deleteUserApi, userId);

    if (res.status === 200) {
      yield delay(500);
      yield put(deleteUserSucess(userId));
    }
  } catch (error) {
    yield put(deleteUserFail(error.res.data));
  }
}

function* updateUserSaga({ payload: { id, inputs } }) {
  try {
    const res = yield call(updateUserApi, id, inputs);

    if (res.status === 200) {
      yield put(createUserSucess());
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

export function* onUpdateUser() {
  yield takeLatest(UPDATE_USER_START, updateUserSaga);
}

export function* onDeleteUser() {
  while (true) {
    const { payload: userId } = yield take(DELETE_USER_START);
    yield call(deleteUserSaga, userId);
  }
}
const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUser),
  fork(onDeleteUser),
  fork(onUpdateUser),
];

export default function* rootSage() {
  yield all([...userSagas]);
}
