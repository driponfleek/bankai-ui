import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(locale.stories.components.avatars.categoryTitle),
};

export { default as AvatarStory } from './AvatarStory';
export { default as AvatarGroupStory } from './AvatarGroupStory';
