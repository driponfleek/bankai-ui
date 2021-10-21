import React from 'react';
import Guide from './guides/CalloutMemoGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/calloutMemoArgs';

const { bankaiUI: locale } = strings;

const CalloutMemoStory = (props) => <Guide {...props} />;

storyConfig(CalloutMemoStory, {
    storyName: locale.stories.components.callouts.calloutMemo.title,
    args,
    argTypes,
});

export default CalloutMemoStory;
