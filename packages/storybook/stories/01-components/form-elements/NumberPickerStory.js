import React from 'react';
import Guide from './guides/NumberPickerGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
// import { argTypes, args } from './args/dropdownArgs';

const { bankaiUI: locale } = strings;

const NumberPickerStory = (props) => <Guide {...props} />;

storyConfig(NumberPickerStory, {
    storyName: locale.stories.components.formElements.numberPicker.title,
    // args: { hasError: false },
    // args,
    // argTypes,
});

export default NumberPickerStory;
