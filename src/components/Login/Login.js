import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleLogin } from "../../actions";

const onChange = (handleLogin, e) => {
    const value = e.target.value;
    handleLogin(value);
};

const Login = ({ handleLogin, login }) => {
    let logginInput = null;

    useEffect(() => {
        logginInput.focus();
    }, []);

    return (
        <div className="sign-in-input login">
            <span className="sign-in-input-label">Эл. почта или телефон</span>
            <input
              value={login}
              ref={(input => logginInput = input)}
              onChange={onChange.bind(null, handleLogin)}
            />
        </div>
    )
};

Login.propTypes = {
    // from connect
    handleLogin: PropTypes.func.isRequired,
    login: PropTypes.string,
};

Login.defaultProps = {
    login: '',
};

export default connect(state => ({
    login: state.authForm.login,
}), { handleLogin })(Login);
