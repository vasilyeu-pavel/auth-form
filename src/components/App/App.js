import React from "react";
import {Provider} from 'react-redux';
import store from '../../store/index';
import AuthForm from '../AuthForm/AuthForm';

import '../../assets/styles/App.scss';

const App = () => (
    <Provider store={store}>
        <div className="app">
            <AuthForm />
        </div>
    </Provider>
);
export default App;
