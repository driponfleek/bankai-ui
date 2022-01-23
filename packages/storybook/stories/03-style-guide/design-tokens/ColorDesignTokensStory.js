import React from 'react';
import Guide from './guides/ColorDesignTokensGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

const ColorDesignTokensStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(ColorDesignTokensStory, {
    storyName: locale.stories.styleGuide.designTokens.colorTokens.title,
    hasA11Y: false,
    hasActions: false,
    shouldShowPanel: false,
});

export default ColorDesignTokensStory;
