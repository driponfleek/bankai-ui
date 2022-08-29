import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-callouts/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-callouts/README.md';
import Guide from './guides/GuideCallout';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/calloutArgs';

const { bankaiUI: locale } = strings;

const StoryCallout = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryCallout, {
    storyName: locale.stories.components.callouts.callout.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StoryCallout;
