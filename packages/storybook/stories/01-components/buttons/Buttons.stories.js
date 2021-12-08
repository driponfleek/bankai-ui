import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(locale.stories.components.buttons.categoryTitle),
};

export { default as ButtonStory } from './ButtonStory';
export { default as LinkButtonStory } from './LinkButtonStory';
export { default as MenuButtonStory } from './MenuButtonStory';
export { default as SplitButtonStory } from './SplitButtonStory';
