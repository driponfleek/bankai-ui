import React from 'react';
import Guide from './guides/HyperlinkGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/hyperlinkArgs';

const { bankaiUI: locale } = strings;

const HyperlinkStory = (props) => <Guide {...props} />;

storyConfig(HyperlinkStory, {
    storyName: locale.stories.components.typography.hyperlink.title,
    args,
    argTypes,
});

export default HyperlinkStory;
