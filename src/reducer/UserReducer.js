import {SUCCES_SIGN_IN} from '../constants';

const initialState = {
    user: null,
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCES_SIGN_IN: {
            return {
                user: action.payload,
            }
        }

        default:
            return state;
    }
};

export default UserReducer
