import { getStyleGuideTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getStyleGuideTitle(
        locale.stories.styleGuide.iconography.categoryTitle,
    ),
};

export { default as IconographyStory } from './IconographyStory';
