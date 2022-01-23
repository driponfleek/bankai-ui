import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-form-elements-rw/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-form-elements-rw/README.md';
import Guide from './guides/MultiselectGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/multiselectArgs';

const { bankaiUI: locale } = strings;

const MultiselectStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(MultiselectStory, {
    storyName: locale.stories.components.formElements.multiselect.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default MultiselectStory;
