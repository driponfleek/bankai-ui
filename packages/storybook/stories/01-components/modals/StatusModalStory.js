import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-modals/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-modals/README.md';
import Guide from './guides/StatusModalGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/statusModalArgs';

const { bankaiUI: locale } = strings;

const StatusModalStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(StatusModalStory, {
    storyName: locale.stories.components.modals.statusModal.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StatusModalStory;
