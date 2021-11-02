import React from 'react';
import Guide from './guides/LoadingBarsGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/loadingBarsArgs';

const { bankaiUI: locale } = strings;

const LoadingBarsStory = (props) => <Guide {...props} />;

storyConfig(LoadingBarsStory, {
    storyName: locale.stories.components.loading.loadingBars.title,
    args,
    argTypes,
});

export default LoadingBarsStory;
