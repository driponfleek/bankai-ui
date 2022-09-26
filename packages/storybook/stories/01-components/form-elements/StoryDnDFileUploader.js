import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-form-elements/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-form-elements/README.md';
import Guide from './guides/DnDFileUploaderGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/dndFileUploaderArgs';

const { bankaiUI: locale } = strings;

const StoryDnDFileUploader = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryDnDFileUploader, {
    storyName: locale.stories.components.formElements.dndFileUploader.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StoryDnDFileUploader;
