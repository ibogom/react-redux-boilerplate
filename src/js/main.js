/** REACT COMPONENTS **/
import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';

/** CONTAINERS **/
import {App} from './containers';

/** REDUCERS **/
import AppReducers from './reducers';

/** THEMES **/
import '../assets/themes/default/main.scss';

const store = createStore(AppReducers);

render(<Provider store={store}>
    <Router>
        <App/>
    </Router>
</Provider>, document.getElementById('app'));