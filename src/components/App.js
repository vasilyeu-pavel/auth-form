import React from "react";
import {Provider} from 'react-redux';
import store from '../store';

import '../assets/styles/App.scss';

const App = () => (
    <Provider store={store}>
        <div>
            <h1>Auth form</h1>
        </div>
    </Provider>
);
export default App;
