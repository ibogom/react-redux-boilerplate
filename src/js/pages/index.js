import React from 'react'
import {Switch, Route} from 'react-router-dom';

/** ROUTES **/
import NotFound from './404/404';
import Root from './root/root';

const Pages = () => (
        <main>
            <Switch>
                <Route exact path='/' component={Root}/>
                <Route exact path='*' component={NotFound}/>
            </Switch>
        </main>
);

export default Pages;