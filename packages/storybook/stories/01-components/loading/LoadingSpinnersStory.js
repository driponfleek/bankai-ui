import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-loading/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-loading/README.md';
import Guide from './guides/LoadingSpinnersGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/loadingSpinnersArgs';

const { bankaiUI: locale } = strings;

const LoadingSpinnersStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(LoadingSpinnersStory, {
    storyName: locale.stories.components.loading.loadingSpinners.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default LoadingSpinnersStory;
