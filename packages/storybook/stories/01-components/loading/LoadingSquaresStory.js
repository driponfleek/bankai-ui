import React from 'react';
import Guide from './guides/LoadingSquaresGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/loadingSquaresArgs';

const { bankaiUI: locale } = strings;

const LoadingSquaresStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(LoadingSquaresStory, {
    storyName: locale.stories.components.loading.loadingSquares.title,
    args,
    argTypes,
});

export default LoadingSquaresStory;
