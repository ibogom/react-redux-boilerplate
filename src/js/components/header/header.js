import React from 'react';
import PropTypes from 'prop-types';

import {header, left, right, middle} from './header.scss';

export default class Header extends React.Component {

    static propTypes = {

    };

    static defaultProps = {};

    constructor(props){
        super(props);
    }

    render(){
        return(<div className={header}>
            <div className={left}>

            </div>
            <div className={middle}>

            </div>
            <div className={right}>

            </div>
        </div>)
    }
};