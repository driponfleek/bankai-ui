import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-layouts/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-layouts/README.md';
import Guide from './guides/FormLayoutGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/formLayoutArgs';

const { bankaiUI: locale } = strings;

const FormLayoutStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(FormLayoutStory, {
    storyName: locale.stories.components.layouts.formLayout.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default FormLayoutStory;
