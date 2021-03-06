import React from 'react';
import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {compose, createStore,applyMiddleware} from "redux";
import {rootReducer} from "./redux/RootReducer";
import {Provider} from 'react-redux'
import thunk from "redux-thunk"
import {forbiddenWordMiddleware} from "./redux/middleware";
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from "./redux/saga";

const saga = createSagaMiddleware()
const store = createStore(rootReducer,compose(
    applyMiddleware(
        thunk,forbiddenWordMiddleware,saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
saga.run(sagaWatcher)
render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
