import React from 'react';
import Guide from './guides/HyperlinkGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/hyperlinkArgs';

const { bankaiUI: locale } = strings;

const StoryHyperlink = (props) => <Guide {...props} />;

storyConfig(StoryHyperlink, {
    storyName: locale.stories.components.typography.hyperlink.title,
    args,
    argTypes,
});

export default StoryHyperlink;
