/** REACT COMPONENTS **/
import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';

/** CONTAINERS **/
import { App }  from './containers';

/** COMPONENTS **/
import { Header, Footer } from './components';

/** PAGES NAVIGATION **/
import Pages from './pages';

/** REDUCERS **/
import AppReducers from './reducers';

/** THEMES **/
import '../assets/themes/default/main.scss';

const store = createStore(AppReducers);

render(<Provider store={store}>
    <Router>
        <App>
            <Header/>
            <Pages/>
            <Footer/>
        </App>
    </Router>
</Provider>, document.getElementById('app'));