import React from 'react';
import Guide from './guides/GenericErrorGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/genericErrorArgs';

const { bankaiUI: locale } = strings;

const GenericErrorStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(GenericErrorStory, {
    storyName: locale.stories.components.callouts.genericError.title,
    args,
    argTypes,
});

export default GenericErrorStory;
