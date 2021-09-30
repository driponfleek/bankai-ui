import React from 'react';
import Guide from './guides/ToggleSwitchGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/toggleSwitchArgs';

const { bankaiUI: locale } = strings;

const ToggleSwitchStory = (props) => <Guide {...props} />;

storyConfig(ToggleSwitchStory, {
    storyName: locale.stories.components.formElements.toggleSwitch.title,
    args,
    argTypes,
});

export default ToggleSwitchStory;
