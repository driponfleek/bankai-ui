import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-accordions/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-accordions/README.md';
import Guide from './guides/GuideAccordion';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/accordionArgs';

const { bankaiUI: locale } = strings;

const StoryAccordion = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryAccordion, {
    storyName: locale.stories.components.accordions.accordion.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StoryAccordion;
