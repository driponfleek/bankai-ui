import { getStyleGuideTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getStyleGuideTitle(
        locale.stories.styleGuide.typography.categoryTitle,
    ),
};

export { default as TypographySystem } from './TypographySystemStory';
