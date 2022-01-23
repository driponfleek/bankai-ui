import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-loading/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-loading/README.md';
import Guide from './guides/LoadingDotsGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/loadingDotsArgs';

const { bankaiUI: locale } = strings;

const LoadingDotsStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(LoadingDotsStory, {
    storyName: locale.stories.components.loading.loadingDots.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default LoadingDotsStory;
