import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-form-elements-rw/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-form-elements-rw/README.md';
import Guide from './guides/DropdownGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/dropdownArgs';

const { bankaiUI: locale } = strings;

const StoryDropdown = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryDropdown, {
    storyName: locale.stories.components.formElements.dropdown.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StoryDropdown;
