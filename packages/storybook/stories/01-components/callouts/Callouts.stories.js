import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(locale.stories.components.callouts.categoryTitle),
};

export { default as Callout } from './StoryCallout';
export { default as CalloutBanner } from './StoryCalloutBanner';
