import React from 'react';
import Guide from './guides/ToasterGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/toasterArgs';

const { bankaiUI: locale } = strings;

const ToasterStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(ToasterStory, {
    storyName: locale.stories.components.toasters.toaster.title,
    args,
    argTypes,
});

export default ToasterStory;
