import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-callouts/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-callouts/README.md';
import Guide from './guides/CalloutGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/calloutArgs';

const { bankaiUI: locale } = strings;

const CalloutStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(CalloutStory, {
    storyName: locale.stories.components.callouts.callout.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default CalloutStory;
