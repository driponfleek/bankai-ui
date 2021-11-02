import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(locale.stories.components.loading.categoryTitle),
};

export { default as LoadingBarsStory } from './LoadingBarsStory';
export { default as LoadingDotsStory } from './LoadingDotsStory';
export { default as LoadingFlowStory } from './LoadingFlowStory';
export { default as LoadingSkeletonStory } from './LoadingSkeletonStory';
export { default as LoadingSpheresStory } from './LoadingSpheresStory';
export { default as LoadingSpinnersStory } from './LoadingSpinnersStory';
export { default as LoadingSquaresStory } from './LoadingSquaresStory';
export { default as LoadingStateStory } from './LoadingStateStory';
