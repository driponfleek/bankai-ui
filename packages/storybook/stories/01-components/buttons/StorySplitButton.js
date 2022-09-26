import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-buttons/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-buttons/README.md';
import Guide from './guides/SplitButtonGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/splitButtonArgs';

const { bankaiUI: locale } = strings;

const StorySplitButton = (props) => {
    return <Guide {...props} />;
};

storyConfig(StorySplitButton, {
    storyName: locale.stories.components.buttons.splitButton.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StorySplitButton;
