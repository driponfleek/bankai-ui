import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(locale.stories.components.modals.categoryTitle),
};

export { default as Modal } from './StoryModal';
export { default as StatusModal } from './StoryStatusModal';
