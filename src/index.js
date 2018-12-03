import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import BurgerBuilderReducer from './store/reducers/BurgerBuilder';

const rootReducer = combineReducers({
    BurgerBuilderReducer: BurgerBuilderReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const globalStore = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(<Provider store={globalStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
