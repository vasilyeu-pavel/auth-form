import {takeEvery} from 'redux-saga/effects';
import submitFormSaga from './submitFormSaga';
import validationSaga from './validationSaga';

import {REMIND_PASSWORD, SUBMIT_FORM} from '../constants';

export default function* sagas() {
    yield takeEvery([REMIND_PASSWORD], validationSaga);
    yield takeEvery([SUBMIT_FORM], submitFormSaga)
}
