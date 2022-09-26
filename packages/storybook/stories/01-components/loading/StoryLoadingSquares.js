import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-loading/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-loading/README.md';
import Guide from './guides/LoadingSquaresGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/loadingSquaresArgs';

const { bankaiUI: locale } = strings;

const StoryLoadingSquares = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryLoadingSquares, {
    storyName: locale.stories.components.loading.loadingSquares.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StoryLoadingSquares;
