/** REACT COMPONENTS **/
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

/** CONTAINERS **/
import {App} from './containers';

/** STORES **/
import store from './stores';

/** THEMES **/
import '../assets/themes/main.scss';

import variables from '../assets/themes/dracula/_color_scheme.json';

render(<Provider store={store}>
    <Router>
        <App theme={variables} />
    </Router>
</Provider>, document.getElementById('app'));