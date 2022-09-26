import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(locale.stories.components.layouts.categoryTitle),
};

export { default as FormLayout } from './StoryFormLayout';
export { default as Section } from './StorySection';
