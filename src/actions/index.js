import {HANDLE_LOGIN, HANDLE_PASSWORD, REMIND_PASSWORD, REMOVE_RESET_MESSAGE, SUBMIT_FORM} from '../constants';

export const handleLogin = login => ({
    type: HANDLE_LOGIN,
    payload: login,
});

export const handlePassword = password => ({
    type: HANDLE_PASSWORD,
    payload: password,
});

export const remindPassword = () => ({type: REMIND_PASSWORD});

export const removeResetMessage = () => ({type: REMOVE_RESET_MESSAGE});

export const submitForm = () => ({type: SUBMIT_FORM});
