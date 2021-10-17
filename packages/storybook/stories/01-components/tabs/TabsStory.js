import React from 'react';
import Guide from './guides/TabsGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/tabsArgs';

const { bankaiUI: locale } = strings;

const TabsStory = (props) => <Guide {...props} />;

storyConfig(TabsStory, {
    storyName: locale.stories.components.tabViews.tabs.title,
    args,
    argTypes,
});

export default TabsStory;
