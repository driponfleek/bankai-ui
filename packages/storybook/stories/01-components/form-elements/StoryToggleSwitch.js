import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-form-elements/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-form-elements/README.md';
import Guide from './guides/ToggleSwitchGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/toggleSwitchArgs';

const { bankaiUI: locale } = strings;

const StoryToggleSwitch = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryToggleSwitch, {
    storyName: locale.stories.components.formElements.toggleSwitch.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StoryToggleSwitch;
