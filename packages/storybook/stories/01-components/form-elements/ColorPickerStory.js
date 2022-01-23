import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-form-elements/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-form-elements/README.md';
import Guide from './guides/ColorPickerGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/colorPickerArgs';

const { bankaiUI: locale } = strings;

const ColorPickerStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(ColorPickerStory, {
    storyName: locale.stories.components.formElements.colorPicker.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default ColorPickerStory;
