import React from 'react';
import Guide from './guides/FormLayoutGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/formLayoutArgs';

const { bankaiUI: locale } = strings;

const FormLayoutStory = (props) => <Guide {...props} />;

storyConfig(FormLayoutStory, {
    storyName: locale.stories.components.layouts.formLayout.title,
    args,
    argTypes,
});

export default FormLayoutStory;
