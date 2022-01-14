import { getStyleGuideTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getStyleGuideTitle(
        locale.stories.styleGuide.designTokens.categoryTitle,
    ),
};

export { default as WhatAreDesignTokensStory } from './WhatAreDesignTokensStory';
export { default as ColorDesignTokensStory } from './ColorDesignTokensStory';
export { default as SpecDesignTokensStory } from './SpecDesignTokensStory';
