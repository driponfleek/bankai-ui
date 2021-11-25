import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(locale.stories.components.lists.categoryTitle),
};

export { default as ListStory } from './ListStory';
export { default as ListItemStory } from './ListItemStory';
