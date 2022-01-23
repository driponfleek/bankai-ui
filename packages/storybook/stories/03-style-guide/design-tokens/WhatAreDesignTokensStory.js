import React from 'react';
import Guide from './guides/WhatAreDesignTokensGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

const WhatAreDesignTokensStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(WhatAreDesignTokensStory, {
    storyName: locale.stories.styleGuide.designTokens.whatAreDesignTokens.title,
    hasA11Y: false,
    hasActions: false,
    shouldShowPanel: false,
});

export default WhatAreDesignTokensStory;
