import React from 'react';
import Guide from './guides/FormFieldComposerGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/formFieldComposerArgs';

const { bankaiUI: locale } = strings;

const FormFieldComposerStory = (props) => <Guide {...props} />;

storyConfig(FormFieldComposerStory, {
    storyName: locale.stories.components.formElements.formFieldComposer.title,
    args,
    argTypes,
});

export default FormFieldComposerStory;
