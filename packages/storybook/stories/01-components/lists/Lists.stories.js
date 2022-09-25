import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(locale.stories.components.lists.categoryTitle),
};

export { default as List } from './StoryList';
export { default as ListItem } from './StoryListItem';
