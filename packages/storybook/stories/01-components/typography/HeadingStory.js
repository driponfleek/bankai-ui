import React from 'react';
import Guide from './guides/HeadingGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/headingArgs';

const { bankaiUI: locale } = strings;

const HeadingStory = (props) => <Guide {...props} />;

storyConfig(HeadingStory, {
    storyName: locale.stories.components.typography.heading.title,
    args,
    argTypes,
});

export default HeadingStory;
