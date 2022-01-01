import React from 'react';
import Guide from './guides/ColorPickerInputGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/colorPickerInputArgs';

const { bankaiUI: locale } = strings;

const ColorPickerInputStory = (props) => <Guide {...props} />;

storyConfig(ColorPickerInputStory, {
    storyName: locale.stories.components.formElements.colorPickerInput.title,
    args,
    argTypes,
});

export default ColorPickerInputStory;
