import React from 'react';
import Guide from './guides/StatusModalGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/statusModalArgs';

const { bankaiUI: locale } = strings;

const StatusModalStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(StatusModalStory, {
    storyName: locale.stories.components.modals.statusModal.title,
    args,
    argTypes,
});

export default StatusModalStory;
