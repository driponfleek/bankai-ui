import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(
        locale.stories.components.formElements.categoryTitle,
    ),
};

export { default as TextareaStory } from './TextareaStory';
export { default as TextInputStory } from './TextInputStory';
