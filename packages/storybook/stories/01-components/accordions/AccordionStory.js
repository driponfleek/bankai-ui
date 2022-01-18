import React from 'react';
import Guide from './guides/AccordionGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/accordionArgs';

const { bankaiUI: locale } = strings;

const AccordionStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(AccordionStory, {
    storyName: locale.stories.components.accordions.accordion.title,
    args,
    argTypes,
});

export default AccordionStory;
