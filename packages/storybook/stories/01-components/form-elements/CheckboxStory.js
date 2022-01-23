import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-form-elements/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-form-elements/README.md';
import Guide from './guides/CheckboxGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/checkboxArgs';

const { bankaiUI: locale } = strings;

const CheckboxStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(CheckboxStory, {
    storyName: locale.stories.components.formElements.checkbox.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default CheckboxStory;
