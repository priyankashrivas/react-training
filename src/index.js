import React from 'react';
import ReactDOM from 'react-dom';

//new import start
import { Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

//creating a store which holds all reducers
const store = createStore(reducers , applyMiddleware(thunk));

//changed the render
ReactDOM.render(
    
    //provider makes redux store available to any nested components
    <Provider store = {store} > 
        <App />
    </Provider>,
    
    document.querySelector('#root')
);