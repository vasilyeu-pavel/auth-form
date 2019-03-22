import {combineReducers} from 'redux';
import AuthFormReducer from './AuthFormReducer';
import UserReducer from './UserReducer';

export default combineReducers({
    authForm: AuthFormReducer,
    user: UserReducer,
});
