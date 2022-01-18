import React from 'react';
import Guide from './guides/DropdownGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/dropdownArgs';

const { bankaiUI: locale } = strings;

const DropdownStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(DropdownStory, {
    storyName: locale.stories.components.formElements.dropdown.title,
    args,
    argTypes,
});

export default DropdownStory;
