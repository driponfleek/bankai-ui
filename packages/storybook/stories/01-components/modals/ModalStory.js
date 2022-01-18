import React from 'react';
import Guide from './guides/ModalGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/modalArgs';

const { bankaiUI: locale } = strings;

const ModalStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(ModalStory, {
    storyName: locale.stories.components.modals.modal.title,
    args,
    argTypes,
});

export default ModalStory;
