import React from 'react';
import Guide from './guides/TextareaGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/textareaArgs';

const { bankaiUI: locale } = strings;

const TextareaStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(TextareaStory, {
    storyName: locale.stories.components.formElements.textarea.title,
    args,
    argTypes,
});

export default TextareaStory;
