import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-callouts/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-callouts/README.md';
import Guide from './guides/CalloutMemoGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/calloutMemoArgs';

const { bankaiUI: locale } = strings;

const CalloutMemoStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(CalloutMemoStory, {
    storyName: locale.stories.components.callouts.calloutMemo.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default CalloutMemoStory;
