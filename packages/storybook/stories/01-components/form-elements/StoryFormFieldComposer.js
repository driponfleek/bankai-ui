import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-form-elements/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-form-elements/README.md';
import Guide from './guides/FormFieldComposerGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/formFieldComposerArgs';

const { bankaiUI: locale } = strings;

const StoryFormFieldComposer = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryFormFieldComposer, {
    storyName: locale.stories.components.formElements.formFieldComposer.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StoryFormFieldComposer;
