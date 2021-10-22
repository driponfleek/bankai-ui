import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(locale.stories.components.badges.categoryTitle),
};

export { default as BadgeStory } from './BadgeStory';
