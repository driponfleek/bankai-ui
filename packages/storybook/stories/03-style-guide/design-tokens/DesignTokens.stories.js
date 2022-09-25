import { getStyleGuideTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getStyleGuideTitle(
        locale.stories.styleGuide.designTokens.categoryTitle,
    ),
};

export { default as AboutDesignTokens } from './StoryAboutDesignTokens';
export { default as ColorDesignTokens } from './StoryColorDesignTokens';
// export { default as SpecDesignTokens } from './SpecDesignTokensStory';
