import "regenerator-runtime/runtime";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import logger from "redux-logger"
import sagas from '../sagas';

import reducer from "../reducer";

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware( sagaMiddleware, logger );

const store = createStore(reducer, {}, enhancer);

sagaMiddleware.run(sagas);

export default store;
