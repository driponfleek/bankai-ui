import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-form-elements/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-form-elements/README.md';
import Guide from './guides/TextareaGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/textareaArgs';

const { bankaiUI: locale } = strings;

const StoryTextarea = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryTextarea, {
    storyName: locale.stories.components.formElements.textarea.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StoryTextarea;
