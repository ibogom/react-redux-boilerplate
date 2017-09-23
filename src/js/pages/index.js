import React from 'react'
import {Switch, Route} from 'react-router-dom';

/** ROUTES **/
import NotFound from './404/404';
import Root from './root/root';

import { main } from './pages.scss';

export default class Pages extends React.Component {
    render() {
        return (<main className={main}>
            <Switch>
                <Route exact path='/' component={Root}/>
                <Route path='*' component={NotFound}/>
            </Switch>
        </main>)
    }
};
