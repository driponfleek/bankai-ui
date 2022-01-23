import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-lists/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-lists/README.md';
import Guide from './guides/ListGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/listArgs';

const { bankaiUI: locale } = strings;

const ListStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(ListStory, {
    storyName: locale.stories.components.lists.list.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default ListStory;
