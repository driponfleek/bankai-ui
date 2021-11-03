import React from 'react';
import Guide from './guides/SplitButtonGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/splitButtonArgs';

const { bankaiUI: locale } = strings;

const SplitButtonStory = (props) => <Guide {...props} />;

storyConfig(SplitButtonStory, {
    storyName: locale.stories.components.buttons.splitButton.title,
    args,
    argTypes,
});

export default SplitButtonStory;
