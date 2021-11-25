import React from 'react';
import Guide from './guides/ListItemGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/listItemArgs';

const { bankaiUI: locale } = strings;

const ListItemStory = (props) => <Guide {...props} />;

storyConfig(ListItemStory, {
    storyName: locale.stories.components.lists.listItem.title,
    args,
    argTypes,
});

export default ListItemStory;
