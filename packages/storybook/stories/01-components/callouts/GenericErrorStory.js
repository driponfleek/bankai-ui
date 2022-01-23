import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-callouts/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-callouts/README.md';
import Guide from './guides/GenericErrorGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/genericErrorArgs';

const { bankaiUI: locale } = strings;

const GenericErrorStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(GenericErrorStory, {
    storyName: locale.stories.components.callouts.genericError.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default GenericErrorStory;
