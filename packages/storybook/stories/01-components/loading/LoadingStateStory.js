import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-loading/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-loading/README.md';
import Guide from './guides/LoadingStateGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/loadingStateArgs';

const { bankaiUI: locale } = strings;

const LoadingStateStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(LoadingStateStory, {
    storyName: locale.stories.components.loading.loadingState.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default LoadingStateStory;
