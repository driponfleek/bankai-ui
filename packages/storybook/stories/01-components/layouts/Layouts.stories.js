import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(locale.stories.components.layouts.categoryTitle),
};

export { default as FormLayoutStory } from './FormLayoutStory';
export { default as SectionStory } from './SectionStory';
