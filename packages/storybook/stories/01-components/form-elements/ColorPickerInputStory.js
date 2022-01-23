import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-form-elements/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-form-elements/README.md';
import Guide from './guides/ColorPickerInputGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/colorPickerInputArgs';

const { bankaiUI: locale } = strings;

const ColorPickerInputStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(ColorPickerInputStory, {
    storyName: locale.stories.components.formElements.colorPickerInput.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default ColorPickerInputStory;
