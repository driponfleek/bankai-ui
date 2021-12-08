import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-buttons/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-buttons/README.md';
import Guide from './guides/LinkButtonGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/linkButtonArgs';

const { bankaiUI: locale } = strings;

const LinkButtonStory = (props) => <Guide {...props} />;

storyConfig(LinkButtonStory, {
    storyName: locale.stories.components.buttons.linkButton.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default LinkButtonStory;
