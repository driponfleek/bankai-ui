import React from 'react';
import Guide from './guides/LoadingSkeletonGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/loadingSkeletonArgs';

const { bankaiUI: locale } = strings;

const LoadingSkeletonStory = (props) => <Guide {...props} />;

storyConfig(LoadingSkeletonStory, {
    storyName: locale.stories.components.loading.loadingSkeleton.title,
    args,
    argTypes,
});

export default LoadingSkeletonStory;
