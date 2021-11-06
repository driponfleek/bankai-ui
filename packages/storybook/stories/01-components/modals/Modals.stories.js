import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(locale.stories.components.modals.categoryTitle),
};

export { default as ModalStory } from './ModalStory';
export { default as StatusModalStory } from './StatusModalStory';
