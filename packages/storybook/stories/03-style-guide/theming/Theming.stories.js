import { getStyleGuideTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getStyleGuideTitle(locale.stories.styleGuide.theming.categoryTitle),
};

export { default as ApplyingThemes } from './ApplyingThemesStory';
export { default as WorkingWithColor } from './WorkingWithColorStory';
