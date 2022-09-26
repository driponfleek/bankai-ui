import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(locale.stories.components.buttons.categoryTitle),
};

export { default as Button } from './StoryButton';
export { default as LinkButton } from './StoryLinkButton';
export { default as MenuButton } from './StoryMenuButton';
export { default as SplitButton } from './StorySplitButton';
