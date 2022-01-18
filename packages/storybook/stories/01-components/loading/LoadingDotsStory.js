import React from 'react';
import Guide from './guides/LoadingDotsGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/loadingDotsArgs';

const { bankaiUI: locale } = strings;

const LoadingDotsStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(LoadingDotsStory, {
    storyName: locale.stories.components.loading.loadingDots.title,
    args,
    argTypes,
});

export default LoadingDotsStory;
