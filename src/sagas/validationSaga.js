import { put, select, call } from 'redux-saga/effects';
import { ERROR_MESSAGE, START_FETCH, SUCCES_RESET } from "../constants";
import { resetPassword } from "./fetchApi";

export default function* validationSaga() {
    const { login } = yield select(({ authForm }) => authForm);
    if (!login.length) {
        yield put({
            type: ERROR_MESSAGE,
            payload: 'Введите эл. почту или телефон',
        });
    }

    if (login.length) {
        yield put({
            type: START_FETCH,
        });

        const success = yield call(resetPassword, login);

        if (!success) {
            // noinspection JSAnnotator
            yield put({
                type: ERROR_MESSAGE,
                payload: 'Пользователя с такой почтой или телефоном не существует',
            });
        } else {
            yield put({
                type: SUCCES_RESET,
                payload: 'Ссылка отправлена на почту',
            });
        }
    }
}
