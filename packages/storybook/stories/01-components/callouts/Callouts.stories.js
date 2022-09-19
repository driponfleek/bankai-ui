import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(locale.stories.components.callouts.categoryTitle),
};

export { default as StoryCallout } from './StoryCallout';
export { default as StoryCalloutBanner } from './StoryCalloutBanner';
