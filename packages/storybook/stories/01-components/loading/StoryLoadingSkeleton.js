import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-loading/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-loading/README.md';
import Guide from './guides/LoadingSkeletonGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/loadingSkeletonArgs';

const { bankaiUI: locale } = strings;

const StoryLoadingSkeleton = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryLoadingSkeleton, {
    storyName: locale.stories.components.loading.loadingSkeleton.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StoryLoadingSkeleton;
