// -*- mode: rjsx -*-
import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Button from 'material-ui/Button'
import Upload from 'material-ui-upload/Upload';
import UploadPreview from 'material-ui-upload/UploadPreview';

let theme = (v) => ({v});

storiesOf('Upload', module)
    .add(
        'Default button',
        () => theme(
            <Upload
              label="Add"
              onFileLoad={action('onFileLoad')}
              />
        )
    )
    .add(
        'RaisedButton',
        () => theme(
            <Upload
              label="Add"
              onFileLoad={action('onFileLoad')}
              buttonControl={Button}
              />
        )
    )
;

storiesOf('UploadPreview', module)
    .add(
        'Default button',
        () => theme(
            <UploadPreview
              title="Picture"
              label="Add"
              initialItems={{}}
              onChange={action('UploadPreview.onChange')}
              />
        )
    )
    .add(
        'RaisedButton',
        () => theme(
            <UploadPreview
              title="Picture"
              label="Add"
              buttonControl={RaisedButton}
              initialItems={{}}
              onChange={action('UploadPreview.onChange')}
              />
        )
    )
;
