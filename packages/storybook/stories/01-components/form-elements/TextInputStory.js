import React from 'react';
import Guide from './guides/TextInputGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/textInputArgs';

const { bankaiUI: locale } = strings;

const TextInputStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(TextInputStory, {
    storyName: locale.stories.components.formElements.textInput.title,
    args,
    argTypes,
});

export default TextInputStory;
