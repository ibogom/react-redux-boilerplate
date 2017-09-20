import React from "react";
import { appWrapper } from './app.scss';

export default class App extends React.Component {
    render() {
        return (
            <div className={appWrapper}>
                {this.props.children}
            </div>
        )
    }
}