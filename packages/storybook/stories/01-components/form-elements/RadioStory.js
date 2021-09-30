import React from 'react';
import Guide from './guides/RadioGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/radioArgs';

const { bankaiUI: locale } = strings;

const RadioStory = (props) => <Guide {...props} />;

storyConfig(RadioStory, {
    storyName: locale.stories.components.formElements.radio.title,
    args,
    argTypes,
});

export default RadioStory;
