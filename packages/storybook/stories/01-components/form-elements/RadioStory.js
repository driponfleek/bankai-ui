import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-form-elements/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-form-elements/README.md';
import Guide from './guides/RadioGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/radioArgs';

const { bankaiUI: locale } = strings;

const RadioStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(RadioStory, {
    storyName: locale.stories.components.formElements.radio.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default RadioStory;
