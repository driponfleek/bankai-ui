import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-form-elements-rw/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-form-elements-rw/README.md';
import Guide from './guides/NumberPickerGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
// import { argTypes, args } from './args/dropdownArgs';

const { bankaiUI: locale } = strings;

const NumberPickerStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(NumberPickerStory, {
    storyName: locale.stories.components.formElements.numberPicker.title,
    // args: { hasError: false },
    // args,
    // argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default NumberPickerStory;
