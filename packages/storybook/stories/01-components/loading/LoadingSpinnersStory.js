import React from 'react';
import Guide from './guides/LoadingSpinnersGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/loadingSpinnersArgs';

const { bankaiUI: locale } = strings;

const LoadingSpinnersStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(LoadingSpinnersStory, {
    storyName: locale.stories.components.loading.loadingSpinners.title,
    args,
    argTypes,
});

export default LoadingSpinnersStory;
