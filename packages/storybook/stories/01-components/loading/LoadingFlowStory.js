import React from 'react';
import Guide from './guides/LoadingFlowGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/loadingFlowArgs';

const { bankaiUI: locale } = strings;

const LoadingFlowStory = (props) => <Guide {...props} />;

storyConfig(LoadingFlowStory, {
    storyName: locale.stories.components.loading.loadingFlow.title,
    args,
    argTypes,
});

export default LoadingFlowStory;
