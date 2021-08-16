import React from 'react';
import Guide from './guides/ButtonGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/buttonArgs';

const { bankaiUI: locale } = strings;

const ButtonStory = (props) => <Guide {...props} />;

storyConfig(ButtonStory, {
    storyName: locale.stories.components.buttons.button.title,
    args,
    argTypes,
});

export default ButtonStory;
