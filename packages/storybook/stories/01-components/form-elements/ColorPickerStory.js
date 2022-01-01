import React from 'react';
import Guide from './guides/ColorPickerGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/colorPickerArgs';

const { bankaiUI: locale } = strings;

const ColorPickerStory = (props) => <Guide {...props} />;

storyConfig(ColorPickerStory, {
    storyName: locale.stories.components.formElements.colorPicker.title,
    args,
    argTypes,
});

export default ColorPickerStory;
