import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(locale.stories.components.callouts.categoryTitle),
};

export { default as CalloutStory } from './CalloutStory';
export { default as CalloutMemoStory } from './CalloutMemoStory';
export { default as GenericErrorStory } from './GenericErrorStory';
