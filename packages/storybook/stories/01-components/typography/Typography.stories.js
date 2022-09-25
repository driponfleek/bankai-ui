import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(
        locale.stories.components.typography.categoryTitle,
    ),
};

export { default as HeadingStory } from './StoryHeading';
export { default as HyperlinkStory } from './StoryHyperlink';
