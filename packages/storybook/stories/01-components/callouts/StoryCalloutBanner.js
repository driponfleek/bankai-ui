import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-callouts/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-callouts/README.md';
import Guide from './guides/GuideCalloutBanner';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/calloutBannerArgs';

const { bankaiUI: locale } = strings;

const StoryCalloutBanner = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryCalloutBanner, {
    storyName: locale.stories.components.callouts.calloutBanner.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StoryCalloutBanner;
