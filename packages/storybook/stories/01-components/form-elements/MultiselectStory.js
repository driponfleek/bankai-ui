import React from 'react';
import Guide from './guides/MultiselectGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/multiselectArgs';

const { bankaiUI: locale } = strings;

const MultiselectStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(MultiselectStory, {
    storyName: locale.stories.components.formElements.multiselect.title,
    args,
    argTypes,
});

export default MultiselectStory;
