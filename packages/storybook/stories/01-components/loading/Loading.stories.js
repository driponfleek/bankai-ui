import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(locale.stories.components.loading.categoryTitle),
};

export { default as LoadingBars } from './StoryLoadingBars';
export { default as LoadingDots } from './StoryLoadingDots';
export { default as LoadingFlow } from './StoryLoadingFlow';
export { default as LoadingSkeleton } from './StoryLoadingSkeleton';
export { default as LoadingSpheres } from './StoryLoadingSpheres';
export { default as LoadingSpinners } from './StoryLoadingSpinners';
export { default as LoadingSquares } from './StoryLoadingSquares';
export { default as LoadingState } from './StoryLoadingState';
