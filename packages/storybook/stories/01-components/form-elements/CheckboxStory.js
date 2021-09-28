import React from 'react';
import Guide from './guides/CheckboxGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/checkboxArgs';

const { bankaiUI: locale } = strings;

const CheckboxStory = (props) => <Guide {...props} />;

storyConfig(CheckboxStory, {
    storyName: locale.stories.components.formElements.checkbox.title,
    args,
    argTypes,
});

export default CheckboxStory;
