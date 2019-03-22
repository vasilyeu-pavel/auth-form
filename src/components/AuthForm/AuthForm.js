import React from "react";

const AuthForm = () => {
    return (
        <div className="auth-form">
            <div className="auth-form-main">
               <div className="auth-form-main-header">
                    <h2 className="header-item">Вход</h2>
                    <span className="header-item register-button">Регистрация</span>
               </div>
                <div className="auth-form-main-sign-in">
                    <div className="sign-in-input login">
                        <span className="sign-in-input-label">Эл. почта или телефон</span>
                        <input/>
                    </div>
                    <div className="sign-in-input password">
                        <span className="sign-in-input-label">Пароль</span>
                        <input/>
                    </div>
               </div>
            </div>
            <div className="auth-form-footer">
                <div className="auth-form-footer-submit">
                    <button className="submit-button">Войти на площадку</button>
                </div>
            </div>
        </div>
    )
};

export default AuthForm;
