import React from 'react';
import Guide from './guides/DnDFileUploaderGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/dndFileUploaderArgs';

const { bankaiUI: locale } = strings;

const DnDFileUploaderStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(DnDFileUploaderStory, {
    storyName: locale.stories.components.formElements.dndFileUploader.title,
    args,
    argTypes,
});

export default DnDFileUploaderStory;
