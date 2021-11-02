import React from 'react';
import Guide from './guides/LoadingStateGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/loadingStateArgs';

const { bankaiUI: locale } = strings;

const LoadingStateStory = (props) => <Guide {...props} />;

storyConfig(LoadingStateStory, {
    storyName: locale.stories.components.loading.loadingState.title,
    args,
    argTypes,
});

export default LoadingStateStory;
