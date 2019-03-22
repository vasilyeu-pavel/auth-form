import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitForm } from '../../actions';

const Submit = ({ login, password, errorMessage, submitForm }) => {
    const activeStyle = login.length && password.length ? 1 : 0.7;
    return (
        <div className="auth-form-footer-submit">
            <button
                className="submit-button"
                style={{
                    opacity: activeStyle,
                }}
                onClick={submitForm}
            >
                Войти на площадку
            </button>
            <span className="validation-message">{errorMessage}</span>
        </div>
    )
};

Submit.propTypes = {
    // from connect
    login: PropTypes.string,
    submitForm: PropTypes.func.isRequired,
    password: PropTypes.string,
    errorMessage: PropTypes.string,
};

Submit.defaultProps = {
    login: '',
    password: '',
    errorMessage: '',
};

export default connect(state => ({
    login: state.authForm.login,
    password: state.authForm.password,
    errorMessage: state.authForm.error.message,
}), { submitForm })(Submit);

