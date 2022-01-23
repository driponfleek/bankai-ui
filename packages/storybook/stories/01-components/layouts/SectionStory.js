import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-layouts/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-layouts/README.md';
import Guide from './guides/SectionGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/sectionArgs';

const { bankaiUI: locale } = strings;

const SectionStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(SectionStory, {
    storyName: locale.stories.components.layouts.section.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default SectionStory;
