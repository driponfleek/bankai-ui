import React from 'react';
import Guide from './guides/CalloutGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/calloutArgs';

const { bankaiUI: locale } = strings;

const CalloutStory = (props) => <Guide {...props} />;

storyConfig(CalloutStory, {
    storyName: locale.stories.components.callouts.callout.title,
    args,
    argTypes,
});

export default CalloutStory;
