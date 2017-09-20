import React from 'react';
import renderer from 'react-test-renderer';

import { App } from "../../containers";

describe('App container Test', () => {
    it('Should be rendered with default properties', () => {
        const component = renderer.create(<App/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});