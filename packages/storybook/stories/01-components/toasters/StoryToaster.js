import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-toasters/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-toasters/README.md';
import Guide from './guides/ToasterGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/toasterArgs';

const { bankaiUI: locale } = strings;

const StoryToaster = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryToaster, {
    storyName: locale.stories.components.toasters.toaster.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StoryToaster;
