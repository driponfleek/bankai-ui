import React from 'react';
import Guide from './guides/HeadingGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/headingArgs';

const { bankaiUI: locale } = strings;

const StoryHeading = (props) => <Guide {...props} />;

storyConfig(StoryHeading, {
    storyName: locale.stories.components.typography.heading.title,
    args,
    argTypes,
});

export default StoryHeading;
