import React from 'react';
import Guide from './guides/MenuButtonGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/menuButtonArgs';

const { bankaiUI: locale } = strings;

const MenuButtonStory = (props) => <Guide {...props} />;

storyConfig(MenuButtonStory, {
    storyName: locale.stories.components.buttons.menuButton.title,
    args,
    argTypes,
});

export default MenuButtonStory;
