import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'

import reducer from "../reducer";
import logger from "redux-logger"

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware( sagaMiddleware, logger );

const store = createStore(reducer, {}, enhancer);

export default store;
