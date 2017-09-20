import React from 'react';
import renderer from 'react-test-renderer';

import { Header } from "../../components";

describe('Header component Test', () => {
    it('Should be rendered with default properties', () => {
        const component = renderer.create(<Header/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});