import Guide from './guides/WelcomeGuide';
import { getLocale } from '../../utils/localeUtils';
import { storyConfig } from '../../utils/storiesConfigUtils';

const StoryWelcome = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryWelcome, {
    storyName: getLocale('stories.intro.welcome.title'),
    hasA11Y: false,
    hasInfo: false,
    shouldShowPanel: false,
});

export default StoryWelcome;
