import {put, select, call} from 'redux-saga/effects';
import {ERROR_MESSAGE, START_FETCH, SUCCES_SIGN_IN} from "../constants";
import {signIn} from "./fetchApi";

export default function* submitFormSaga() {
    const {login, password} = yield select(({authForm}) => authForm);

    yield put({
        type: START_FETCH,
    });

    const response = yield call(signIn, login, password);

    if (response.error) {
        yield put({
            type: ERROR_MESSAGE,
            payload: 'Неправильный логин или пароль',
        });
    } else {
        const {data} = response;

        yield put({
            type: SUCCES_SIGN_IN,
            payload: data.user
        })
    }
}
