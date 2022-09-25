import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-form-elements-rw/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-form-elements-rw/README.md';
import Guide from './guides/ComboboxGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/comboboxArgs';

const { bankaiUI: locale } = strings;

const StoryCombobox = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryCombobox, {
    storyName: locale.stories.components.formElements.combobox.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StoryCombobox;
