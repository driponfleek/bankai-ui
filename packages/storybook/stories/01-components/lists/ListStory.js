import React from 'react';
import Guide from './guides/ListGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/listArgs';

const { bankaiUI: locale } = strings;

const ListStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(ListStory, {
    storyName: locale.stories.components.lists.list.title,
    args,
    argTypes,
});

export default ListStory;
