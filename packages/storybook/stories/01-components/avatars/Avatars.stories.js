import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(locale.stories.components.avatars.categoryTitle),
};

export { default as Avatar } from './StoryAvatar';
export { default as AvatarGroup } from './StoryAvatarGroup';
