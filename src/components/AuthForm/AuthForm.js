import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from "../Login/Login";
import Password from "../Password/Password";
import Submit from "../Submit/Submit";

const AuthForm = ({ loading }) => {
    return (
        <div className="auth-form">
            <div className="auth-form-main">
               <div className="auth-form-main-header">
                    <h2 className="header-item">Вход</h2>
                    <span className="header-item register-button">Регистрация</span>
               </div>
                <div className="auth-form-main-sign-in">
                    <Login />
                    <Password />
               </div>
            </div>
            <div className="auth-form-footer">
                <Submit />
            </div>
        </div>
    )
};

AuthForm.propTypes = {
    loading: PropTypes.bool.isRequired,
};

export default connect(state => ({
    loading: state.authForm.loading
}))(AuthForm);
