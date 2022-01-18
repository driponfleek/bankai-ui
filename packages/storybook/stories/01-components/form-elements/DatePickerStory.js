import React from 'react';
import Guide from './guides/DatePickerGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/datePickerArgs';

const { bankaiUI: locale } = strings;

const DatePickerStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(DatePickerStory, {
    storyName: locale.stories.components.formElements.datePicker.title,
    args,
    argTypes,
});

export default DatePickerStory;
