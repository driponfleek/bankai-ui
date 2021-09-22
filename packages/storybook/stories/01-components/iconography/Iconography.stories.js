import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(
        locale.stories.components.iconography.categoryTitle,
    ),
};

export { default as IconographyStory } from './IconographyStory';
