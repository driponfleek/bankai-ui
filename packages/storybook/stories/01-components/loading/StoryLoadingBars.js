import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-loading/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-loading/README.md';
import Guide from './guides/LoadingBarsGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/loadingBarsArgs';

const { bankaiUI: locale } = strings;

const StoryLoadingBars = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryLoadingBars, {
    storyName: locale.stories.components.loading.loadingBars.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StoryLoadingBars;
