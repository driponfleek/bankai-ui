import React from 'react';
import Guide from './guides/FieldsetGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/fieldsetArgs';

const { bankaiUI: locale } = strings;

const FieldsetStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(FieldsetStory, {
    storyName: locale.stories.components.formElements.fieldset.title,
    args,
    argTypes,
});

export default FieldsetStory;
