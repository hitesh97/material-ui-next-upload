// -*- mode: rjsx -*-
import React from 'react';
import {mount} from 'enzyme';
import {assert} from 'chai';
import Upload from './index';

const mountWithTheme = (node) => mount(node);

describe('Upload', () => {
    const newUpload = (props = {}) => mountWithTheme(
        <Upload {...props}/>
    );

    it(
        'always renders an input',
        () => {
            const nodes = newUpload().find('input');
            assert.equal(nodes.length, 1);
        }
    );
});
