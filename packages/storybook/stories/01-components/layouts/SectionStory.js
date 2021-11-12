import React from 'react';
import Guide from './guides/SectionGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/sectionArgs';

const { bankaiUI: locale } = strings;

const SectionStory = (props) => <Guide {...props} />;

storyConfig(SectionStory, {
    storyName: locale.stories.components.layouts.section.title,
    args,
    argTypes,
});

export default SectionStory;
