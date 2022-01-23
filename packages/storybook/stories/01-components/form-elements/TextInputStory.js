import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-form-elements/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-form-elements/README.md';
import Guide from './guides/TextInputGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/textInputArgs';

const { bankaiUI: locale } = strings;

const TextInputStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(TextInputStory, {
    storyName: locale.stories.components.formElements.textInput.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default TextInputStory;
