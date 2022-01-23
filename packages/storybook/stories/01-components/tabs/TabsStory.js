import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-tabs/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-tabs/README.md';
import Guide from './guides/TabsGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/tabsArgs';

const { bankaiUI: locale } = strings;

const TabsStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(TabsStory, {
    storyName: locale.stories.components.tabViews.tabs.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default TabsStory;
