import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-lists/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-lists/README.md';
import Guide from './guides/ListItemGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/listItemArgs';

const { bankaiUI: locale } = strings;

const ListItemStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(ListItemStory, {
    storyName: locale.stories.components.lists.listItem.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default ListItemStory;
