import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-form-elements-rw/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-form-elements-rw/README.md';
import Guide from './guides/DatePickerGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/datePickerArgs';

const { bankaiUI: locale } = strings;

const DatePickerStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(DatePickerStory, {
    storyName: locale.stories.components.formElements.datePicker.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default DatePickerStory;
