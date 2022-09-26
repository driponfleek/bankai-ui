import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-form-elements/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-form-elements/README.md';
import Guide from './guides/FieldsetGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/fieldsetArgs';

const { bankaiUI: locale } = strings;

const StoryFieldset = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryFieldset, {
    storyName: locale.stories.components.formElements.fieldset.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StoryFieldset;
