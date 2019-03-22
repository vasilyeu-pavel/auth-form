import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {handlePassword, remindPassword, removeResetMessage} from "../../actions";

const onChange = (handlePassword, e) => {
    const password = e.target.value;
    handlePassword(password);
};

const Password = ({handlePassword, remindPassword, removeResetMessage, resetMessage, password}) => {
    const type = resetMessage.length ? 'text' : 'password';
    return (
        <div className="sign-in-input password">
            <span className="sign-in-input-label">Пароль</span>
            <input
                value={resetMessage.length ? resetMessage : password}
                type={type}
                disabled={!!resetMessage.length}
                onChange={onChange.bind(null, handlePassword)}
            />
            {!resetMessage.length ?
                <span className="remind-button" onClick={remindPassword}>
                    Напомнить
                </span>
                : <span className="remind-button" onClick={removeResetMessage}>
                    Ввести пароль
                </span>
            }
        </div>
    )
};

Password.propTypes = {
    // from connect
    handlePassword: PropTypes.func.isRequired,
    removeResetMessage: PropTypes.func.isRequired,
    remindPassword: PropTypes.func.isRequired,
    resetMessage: PropTypes.string,
    password: PropTypes.string,
};

Password.defaultProps = {
    resetMessage: '',
    password: '',
};

export default connect(state => ({
    resetMessage: state.authForm.resetMessage,
    password: state.authForm.password,
}), {handlePassword, remindPassword, removeResetMessage})(Password);
