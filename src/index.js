import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import BurgerBuilderReducer from './store/reducers/BurgerBuilder';

const rootReducer = combineReducers({
    BurgerBuilderReducer: BurgerBuilderReducer
});
const globalStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={globalStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
