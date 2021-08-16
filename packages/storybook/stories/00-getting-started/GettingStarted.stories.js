import { getIntroTitle } from '../../utils/storiesConfig';
import strings from '../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getIntroTitle(locale.stories.intro.categoryTitle),
};

export { default as WelcomeStory } from './WelcomeStory';
