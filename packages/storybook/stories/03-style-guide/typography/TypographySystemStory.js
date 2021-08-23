import React from 'react';
import Guide from './guides/TypographySystemGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

const TypographySystemStory = () => <Guide />;

storyConfig(TypographySystemStory, {
    storyName: locale.stories.styleGuide.typography.typographySystem.title,
    hasA11Y: false,
    hasInfo: false,
    shouldShowPanel: false,
});

export default TypographySystemStory;
