import {
    HANDLE_LOGIN,
    HANDLE_PASSWORD,
    ERROR_MESSAGE,
    START_FETCH,
    SUCCES_RESET,
    REMOVE_RESET_MESSAGE,
    SUCCES_SIGN_IN
} from '../constants';

const initialState = {
    login: '',
    password: '',
    error: {
        message: ''
    },
    loading: false,
    resetMessage: '',
};

const AuthFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_LOGIN: {
            const login = action.payload;

            return {
                ...state,
                login: login,
            }
        }
        case HANDLE_PASSWORD: {
            const password = action.payload;

            return {
                ...state,
                password: password,
            }
        }
        case ERROR_MESSAGE: {
            const message = action.payload;

            return {
                ...state,
                error: { message },
                loading: false,
            }
        }

        case START_FETCH: {
            return {
                ...state,
                loading: true,
            }
        }

        case SUCCES_RESET: {
            const message = action.payload;
            return {
                ...state,
                loading: false,
                error: { message: '' },
                resetMessage: message,
            }
        }

        case REMOVE_RESET_MESSAGE: {
            return {
                ...state,
                resetMessage: '',
            }
        }

        case SUCCES_SIGN_IN: {
            return {
                ...state,
                resetMessage: '',
                error: { message: '' },
                loading: false,
                login: '',
                password: '',
            }
        }

        default:
            return state;
    }
};

export default AuthFormReducer;
